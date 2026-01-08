import { useEffect } from 'react';
import favicon from "../assets/favicon.svg";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Dashboard() {

    useEffect(() => {
        let link = document.querySelector("link[rel='icon']");
        link.href = favicon;
        document.title = "Vynce | More Than a CRM";
    });

    return (
        <div className="canvas">
            <Header />
            <div className="container">
                <Sidebar />
                <section className="dashboard">

                </section>
            </div>
        </div>
    )
}

export default Dashboard;