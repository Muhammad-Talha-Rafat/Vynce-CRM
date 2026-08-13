import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { BASE, authToken } from "./config.js";
import { tools } from "./tools.js";
import { resources } from "./resources.js";
import { prompts } from "./prompts.js";


// ─── INIT ─────────────────────────────────────────────────────────────────────

interface ToolResult {
    content: { type: "text"; text: string }[];
    isError?: boolean;
};

type Method = "GET" | "POST" | "PATCH" | "DELETE";

const server = new McpServer({ name: "vynce-crm", version: "1.0.0" });

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function headers(): Record<string, string> {
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`
    };
}

async function api(method: Method, path: string, body?: unknown): Promise<ToolResult> {
    let res: Response;
    try {
        const init: RequestInit = { method, headers: headers() };
        if (body) init.body = JSON.stringify(body);
        res = await fetch(`${BASE}${path}`, init);
    } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown network error"
        return {
            content: [{ type: "text", text: `Request failed: ${message}` }],
            isError: true
        };
    }

    const data: unknown = await res.json();

    if (!res.ok) {
        return {
            content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
            isError: true
        };
    }

    return {
        content: [{ type: "text", text: JSON.stringify(data, null, 2) }]
    };
}

// ─── TOOLS, RESOURCES, PROMPTS ────────────────────────────────────────────────

tools(server, api);
resources(server);
prompts(server);

// ─── TRANSPORT ────────────────────────────────────────────────────────────────

const transport = new StdioServerTransport();
await server.connect(transport);
