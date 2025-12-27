
import { Copyrights } from './Footer'
import './css/Signup.css'
import {Link} from 'react-router-dom'
import favicon from './assets/favicon.svg'
import bg_obj_1 from './assets/login.png'
import bg_obj_2 from './assets/signup.png'

function Signup() {

    return (
        <div className="signup">
            <div class="content">
                <h2>Welcome!</h2>
                <p>Already have an account? <Link to={"/login"} class="highlight">Sign in</Link></p>
                <form class="signup-form">
                    <div className="full-name">
                        <input type="text" placeholder="First name" class="input-field" />
                        <input type="text" placeholder="Last name" class="input-field" />
                    </div>
                    <input type="email" placeholder="Email address" class="input-field" />
                    <input type="password" placeholder="Create password" class="input-field" />
                    <input type="password" placeholder="Confirm password" class="input-field" />
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