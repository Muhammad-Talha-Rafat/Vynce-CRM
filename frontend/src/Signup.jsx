
import './css/Signup.css'
import favicon from './assets/favicon.svg'
import bg_obj_1 from './assets/auth_bg_1.png'
import bg_obj_2 from './assets/auth_bg_2.png'
import { Copyrights } from './Footer'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useEffect, useState } from 'react'


function Signup() {

    useEffect(() => {
        let link = document.querySelector("link[rel='icon']");
        link.href = favicon;
        document.title = "Vynce | More Than a CRM";
    });

    const navigate = useNavigate();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        else if (password.length < 8) {
            toast.error("Passwords must be 8 characters long");
            return;
        }
        console.log(firstname, lastname, email, password);
        toast.success("User created successfully");
        navigate('/');
    }


    return (
        <div className="signup">
            <div class="content">
                <h2>Welcome!</h2>
                <p>Already have an account? <Link to={"/login"} class="highlight">Sign in</Link></p>
                <form class="signup-form" onSubmit={handleSubmit}>
                    <div className="full-name">
                        <input type="text" placeholder="First name" class="input-field" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                        <input type="text" placeholder="Last name" class="input-field" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                    </div>
                    <input type="email" placeholder="Email address" class="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Create password" class="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" placeholder="Confirm password" class="input-field" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <p className="message">By clicking “Create account” you agree to our <span>Terms & Conditions</span> and <span>Privacy Policy</span></p>
                    <button type="submit" class="signup-btn">Create account</button>
                </form>
            </div>
            <img src={bg_obj_1} className="bg-img-1" />
            <img src={bg_obj_2} className="bg-img-2" />
            <Link to={"/"}><img src={favicon} className="back-btn" /></Link>
            <Copyrights />
        </div>
    )
}

export default Signup