import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { fileURLToPath } from "url";
import path from "path";


let client: Client | null = null;

async function getClient(): Promise<Client> {
    if (client) return client;

    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    const transport = new StdioClientTransport({
        command: "node",
        args: [path.join(__dirname, "../server.js")]
    });

    client = new Client({ name: "vynce-client", version: "1.0.0" });
    await client.connect(transport);
    return client;
}

export async function read(uri: string): Promise<string> {
    const _client: Client = await getClient();
    const result = await _client.readResource({ uri });
    const content = result.contents[0];
    if (!content) throw new Error("Resource returned no contents");
    if ("text" in content) return content.text;
    else throw new Error("Resource content is not text");
}

export async function list() {
    const _client = await getClient();
    const result = await _client.listResources();
    return result.resources;
}
