
import { Copyrights } from "../components/Footer"
import "../css/Login.css"
import favicon from "../assets/favicon.svg"
import bg_obj_1 from "../assets/auth_bg_1.png"
import bg_obj_2 from "../assets/auth_bg_2.png"
import hide_password from "../assets/hide.svg"
import show_password from "../assets/show.svg"
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'


function Login() {

    useEffect(() => {
        let link = document.querySelector("link[rel='icon']");
        link.href = favicon;
        document.title = "Vynce | More Than a CRM";
    });

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:5000/api/auth/login", {
                email, password
            });
            localStorage.setItem("token", data.token);
            toast.success("Login successful:", data);
            navigate("/dashboard");
        } catch (err) {
            toast.error(err.response?.data?.msg || "Invalid credentials");
        }
    }


    return (
        <div className="login">
            <div className="content">
                <h2>Welcome back!</h2>
                <p>Don't have an account? <Link to={"/signup"} className="highlight">Create one</Link></p>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email address"
                        className="input-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <span
                            className="eye-icon"
                            onClick={() => setShowPassword((prev) => !prev)}
                            role="button"
                            aria-label={showPassword ? "Hide password" : "Show password"} >
                            <img
                                src={showPassword ? hide_password : show_password}
                                alt={showPassword ? "Hide password" : "Show password"} />
                        </span>
                    </div>
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