
import "../css/Sidebar.css";
import dashboard_svg from "../assets/dashboard.svg";
import inbox_svg from "../assets/inbox.svg";
import axios from "axios";
import { useEffect, useState } from "react";

function Sidebar() {

    const [user, setUser] = useState(null);
    const [projects, setProjects] = useState([]);
    const [chats, setChats] = useState([]);


    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token");
            const res = await axios.get("http://localhost:5000/api/users/me", {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            setUser(res.data);
        };

        const fetchChats = async () => {
            const res = await axios.get("http://localhost:5000/api/chats/my", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setChats(res.data);
        };

        const fetchProjects = async () => {
            const res = await axios.get("http://localhost:5000/api/projects/my", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setProjects(res.data);
        };

        fetchUser();
        fetchChats();
        fetchProjects();
    }, [])

    if (!user) return <p>Loading...</p>;


    return (
        <section>
            <h1>Home</h1>
            <div className="home-pages">
                <ul>
                    <li>
                        <img src={dashboard_svg} />
                        <p>Dashboard</p>
                    </li>
                    <li>
                        <img src={inbox_svg} />
                        <p>Inbox</p>
                    </li>
                </ul>
            </div>
            <div className="divider">{/* divider */}</div>
            <div className="chats">
                <span>Chats</span>
                <div className="list-container">
                    {chats.map((chat) => {
                        const otherUser = chat.user1._id === user._id ? chat.user2 : chat.user1;
                        return (
                            <div key={chat._id} className="chat">
                                <img src={otherUser.profileImage.url} />
                                <p className="name">{otherUser.firstname} {otherUser.lastname}</p>
                            </div>
                        );
                    })}
                </div>
                <p className="create">+ Add member</p>
            </div>
            <div className="divider">{/* divider */}</div>
            <div className="projects">
                <span>Projects</span>
                <div className="list-container">
                    {projects.map(project => (
                        <div key={project._id} className="project">
                            <img src={project.projectImage.url} />
                            <p className="name">{project.name}</p>
                        </div>
                    ))}
                </div>
                <p className="create">+ Create Projects</p>
            </div>
        </section>
    )
}

export default Sidebar;