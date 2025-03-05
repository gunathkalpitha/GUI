import React from "react";
import "./StyleSheet_about.css";



const AboutPage = () => {
  return (
    <div>
      

      <div className="hero2"/>
            

      <section className="about">
        <h1>About Us</h1>
        <p>
          At Ceylon Haven, we redefine travel experiences by offering you the
          convenience of seamless hotel reservations. Rooted in the heart of Sri
          Lanka, our platform is your gateway to the island's most stunning
          accommodations, ranging from luxury resorts to cozy boutique stays.
        </p>
        <p>
          Our mission is to connect travelers with the perfect haven that suits
          their needs, while highlighting the essence of Sri Lanka's unmatched
          hospitality and breathtaking beauty.
        </p>
      </section>

      <section className="why-choose">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Tailored Experiences:</strong> Whether you're planning a
            serene getaway in the hills, a sun-soaked escape by the beach, or an
            urban retreat, we ensure your stay is perfectly matched to your
            preferences.
          </li>
          <li>
            <strong>Hassle-Free Bookings:</strong> With intuitive interfaces and
            instant reservations, booking your dream stay is just a few clicks
            away.
          </li>
          <li>
            <strong>Best Price Guarantee:</strong> We partner with Sri Lanka's
            finest across all tiers to bring you the best deals, ensuring value
            for every stay.
          </li>
          <li>
            <strong>24/7 Support:</strong> Our team is available round-the-clock
            to assist you with any inquiries or booking needs.
          </li>
        </ul>
      </section>

      <section className="vision">
        <h2>Our Vision</h2>
        <p>
          Our vision is to elevate the hospitality industry by merging tradition
          with innovation. We strive to create unforgettable travel experiences
          for our guests while empowering local communities.
        </p>
      </section>

      <footer>
        <p>&copy; 2025 Ceylon Haven. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
