import React from 'react';
import './StyleSheet_signup.css';

const SignupPage = () => {
    return (
        <div>
            

        
            <div className="signup-container">
                <form className="signup-form">
                    <h1 className="form-title">Signup</h1>

                    <div className="form-group">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" placeholder="Enter your first name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" placeholder="Enter your last name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select id="country" required>
                            <option value="" disabled selected>Select your country</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact">Contact Number</label>
                        <input type="tel" id="contact" placeholder="Enter your contact number" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea id="address" placeholder="Enter your address" rows="3" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="Create a username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Create a password" required />
                    </div>

               
                    <button type="submit" className="btn">Register</button>
                </form>
            </div>

            <footer className="footer">
                <p>&copy; 2025 Ceylon Haven. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default SignupPage;
