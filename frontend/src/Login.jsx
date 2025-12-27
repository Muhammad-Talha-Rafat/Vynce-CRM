
import { Copyrights } from './Footer'
import './css/Login.css'
import {Link} from 'react-router-dom'
import favicon from './assets/favicon.svg'
import bg_obj_1 from './assets/login.png'
import bg_obj_2 from './assets/signup.png'

function Login() {
    return (
        <div className="login">
            <div class="content">
                <h2>Welcome back!</h2>
                <p>Don't have an account? <Link to={"/signup"} class="highlight">Create one</Link></p>
                <form class="login-form">
                    <input type="email" placeholder="Email address" class="input-field" />
                    <input type="password" placeholder="Password" class="input-field" />
                    <div class="misc">
                        <label class="checkbox-container">
                            <input type="checkbox" />
                            <span class="checkmark">Remember me</span>
                        </label>
                        <a class="highlight">Forgot Password?</a>
                    </div>
                    <button type="submit" class="login-btn">Login</button>
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