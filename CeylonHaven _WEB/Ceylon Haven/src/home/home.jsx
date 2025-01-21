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
                <h1>Welcome to Ceylon Haven</h1>
                <p>Your perfect stay</p>
                <a href="#" className="reserve-btn">Reserve Your Stay</a>
            </div>

            
            <div className="check-availability">
                <div>
                    <input type="date" id="check-in" />
                    <label htmlFor="check-in">Check-in Date</label>
                </div>
                <div>
                    <input type="date" id="check-out" />
                    <label htmlFor="check-out">Check-out Date</label>
                </div>
                <select>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                </select>
                <button>Check Availability</button>
            </div>

           
            <section className="services">
                <h2>Our Services</h2>
                <p>Discover the exclusive services we offer to make your stay memorable.</p>
                <div className="service-list">
                    <div className="service-item">
                    <img src={about1} alt="Luxury Rooms" />
                        <h3>Luxury Rooms</h3>
                        <p>Spacious and elegantly designed rooms with world-class amenities.</p>
                    </div>
                    <div className="service-item">
                    <img src={about2} alt="Fine Dining" />
                        
                        <h3>Fine Dining</h3>
                        <p>Relish delicious cuisines from our premium restaurant options.</p>
                    </div>
                    <div className="service-item">
                    <img src={about3} alt="Relaxing Spa" />
                       
                        <h3>Relaxing Spa</h3>
                        <p>Unwind and rejuvenate with our exclusive spa treatments.</p>
                    </div>
                    <div className="service-item">
                    <img src={about4} alt="Banquet Halls" />
                        
                        <h3>Banquet Halls</h3>
                        <p>Host grand events in our beautifully decorated banquet halls.</p>
                    </div>
                </div>
            </section>

            
            <section className="abouthome">
                <h2>About Ceylon Haven</h2>
                <p>Ceylon Haven combines modern luxury with a touch of traditional Sri Lankan hospitality. Nestled in a prime location, our hotel offers breathtaking views, world-class services, and an unforgettable experience for all guests.</p>
                <a href="/about" className="btn">Learn More</a>
            </section>

    
            <footer>
                <p>&copy; 2025 Ceylon Haven. All rights reserved.</p>
            </footer>
        </>
    );
};

export default CeylonHaven;
