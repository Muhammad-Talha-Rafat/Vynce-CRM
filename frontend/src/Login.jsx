
import { Copyrights } from './Footer'
import './css/Login.css'
import favicon from './assets/favicon.svg'
import bg_obj_1 from './assets/auth_bg_1.png'
import bg_obj_2 from './assets/auth_bg_2.png'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

function Login() {

    useEffect(() => {
        let link = document.querySelector("link[rel='icon']");
        link.href = favicon;
        document.title = "Vynce | More Than a CRM";
    });

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", { email, password });
        toast.success("User authenticated");
        navigate("/");
    }


    return (
        <div className="login">
            <div className="content">
                <h2>Welcome back!</h2>
                <p>Don't have an account? <Link to={"/signup"} className="highlight">Create one</Link></p>
                <form className="login-form" onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email address"
                        className="input-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <div className="misc">
                        <label className="checkbox-container">
                            <input type="checkbox" />
                            <span className="checkmark">Remember me</span>
                        </label>
                        <a className="highlight">Forgot Password?</a>
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
            <img src={bg_obj_1} className="bg-img-1" />
            <img src={bg_obj_2} className="bg-img-2" />
            <Link to={"/"}><img src={favicon} className="back-btn" /></Link>
            <Copyrights />
        </div>
    )
}

export default Login