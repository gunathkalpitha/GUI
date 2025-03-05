import React from 'react';
import './StyleSheet_home.css';

import about1 from './hom_images/about1.jpg';
import about2 from './hom_images/about2.jpg';
import about3 from './hom_images/about3.jpg';
import about4 from './hom_images/about4.jpg';

const CeylonHaven = () => {
    return (
        <>
            <div className="hero">
                <h1>Welcome to <span>Ceylon Haven</span></h1>
                <p>Experience Luxury & Comfort</p>
                <span><a href="/availablerooms" className="reserve-btn">Reserve Your Stay</a></span>
            </div>

            <div className="check-availability">
                <div>
                    <label htmlFor="check-in">Check-in Date</label>
                    <input type="date" id="check-in" />
                </div>
                <div>
                    <label htmlFor="check-out">Check-out Date</label>
                    <input type="date" id="check-out" />
                </div>
                <div>
                    <label htmlFor="guests">Guests</label>
                    <select id="guests">
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                    </select>
                </div>
                <button onClick={() => window.location.href = "/availablerooms"}>Check Availability</button>
            </div>

            <section className="services">
                <h2>Our Exclusive Services</h2>
                <p>Enhance your stay with our premium amenities</p>
                <div className="service-list">
                    <div className="service-item">
                        <img src={about1} alt="Luxury Rooms" />
                        <h3>Luxury Rooms</h3>
                        <p>Elegantly designed rooms with top-tier facilities.</p>
                    </div>
                    <div className="service-item">
                        <img src={about2} alt="Fine Dining" />
                        <h3>Fine Dining</h3>
                        <p>Indulge in exquisite cuisines crafted by top chefs.</p>
                    </div>
                    <div className="service-item">
                        <img src={about3} alt="Relaxing Spa" />
                        <h3>Relaxing Spa</h3>
                        <p>Rejuvenate with our signature spa treatments.</p>
                    </div>
                    <div className="service-item">
                        <img src={about4} alt="Banquet Halls" />
                        <h3>Banquet Halls</h3>
                        <p>Host your grand events in our lavish halls.</p>
                    </div>
                </div>
            </section>

            <section className="about-home">
                <h2>About Ceylon Haven</h2>
                <p>Experience a fusion of modern luxury and Sri Lankan hospitality. With breathtaking views and world-class services, Ceylon Haven is your perfect retreat.</p>
                <a href="/about" className="btn">Learn More</a>
            </section>

            <footer>
                <p>&copy; 2025 Ceylon Haven. All rights reserved.</p>
            </footer>
        </>
    );
};

export default CeylonHaven;
