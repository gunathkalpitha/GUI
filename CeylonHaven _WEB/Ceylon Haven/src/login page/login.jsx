import React from 'react';
import './StyleSheet_login.css';
import usernameIcon from './images/usernameicon.webp';
import passwordIcon from './images/pwicon.webp';



const LoginPage = () => {
    return (
        <div>
           

           
            <div className="background-box">
                
                <div className="login-box">
                    <h2 className="underline">Login</h2>

                <div className="input-container">
                    <input type="text" id="username" name="username" placeholder="Username" required />
                    <img src={usernameIcon} alt="Username Icon" className="icon username-icon" />
                </div>
                <div className="input-container">
                    <input type="password" id="psword" name="psword" placeholder="Password" required />
                    <img src={passwordIcon} alt="Password Icon" className="icon password-icon" />
                </div>
                    <a href="#" className="link">Forgot password?</a>
                    <button type="submit" className="login-btn">Login</button>
                    <h3>Don't have an account? <a  href="/signup " className="link">Sign Up</a></h3>
                </div>

                <div className="vertical-divider"></div>

              
                <div className="welcome-box">
                    <h1>WELCOME TO</h1>
                    <div className="logo">
                        <span className="ceylon">Ceylon</span>
                        <span className="haven">Haven</span>
                    </div>
                    <br />
                    <p>
                        Your journey to luxury begins<br />
                        Here Seamless booking experience<br />
                        Connecting dream destinations <br />
                        Nationwide.
                    </p>
                </div>
            </div>

            <footer className="footer">
                <p>&copy; 2025 Ceylon Haven. All rights reserved.</p>
            </footer>

           
        </div>
    );
};

export default LoginPage;
