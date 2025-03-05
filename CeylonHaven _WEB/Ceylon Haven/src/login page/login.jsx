import React, { useState } from 'react';
import axios from 'axios';
import './StyleSheet_login.css';
import usernameIcon from './images/usernameicon.webp';
import passwordIcon from './images/pwicon.webp';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:4000/login", { 
                username, 
                password 
            });
            setMessage(response.data.message || "Login Successful");
        } catch (error) {
            setMessage(error.response?.data?.error || "Login failed");
        }
    };

    return (
        <div>
            <div className="background-box">
                <div className="login-box">
                    <h2 className="underline">Login</h2>
                    {message && <p style={{ color: message.includes("Successful") ? "green" : "red" }}>{message}</p>}
                    
                    <form onSubmit={handleSubmit}>  
                        <div className="input-container">
                            <input type="text" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
                            <img src={usernameIcon} alt="Username Icon" className="icon username-icon" />
                        </div>
                        <div className="input-container">
                            <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                            <img src={passwordIcon} alt="Password Icon" className="icon password-icon" />
                        </div>
                        <button type="submit" className="login-btn">Login</button>
                    </form>

                    <h3>Don't have an account? <a href="/signup" className="link">Sign Up</a></h3>
                </div>

                <div className="welcome-box">
                    <h1>WELCOME TO</h1>
                    <div className="logo">
                        <span className="ceylon">Ceylon</span>
                        <span className="haven">Haven</span>
                    </div>
                    <p>Your journey to luxury begins here.</p>
                </div>
            </div>

            <footer className="footer">
                <p>&copy; 2025 Ceylon Haven. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LoginPage;
