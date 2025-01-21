import React from "react";
import "./StyleSheet_news.css";

const NewsPage = () => {
  return (
    <div>
      

      <section className="hero4"/>
        
      <main className="news">
        <section className="section">
          <h1>News & Updates</h1>
          <p>
            Welcome to the Ceylon Haven News Page! Stay informed about our latest updates,
            special offers, and exciting events happening at our hotel.
          </p>
        </section>

        <section className="section">
          <h2>Latest News</h2>

          <article className="news-item">
            <h3>🌟 Grand Opening of Our New Wing</h3>
            <p><strong>Date:</strong> 25th of March 2025</p>
            <p>
              We are thrilled to announce the launch of our new wing featuring 20 luxury suites and
              a rooftop infinity pool. Experience unparalleled comfort and breathtaking views. Book now to be among the first to stay!
            </p>
          </article>

          <article className="news-item">
            <h3>🎉 Seasonal Offers & Discounts</h3>
            <p><strong>Event:</strong> Exclusive Holiday Packages</p>
            <p>
              Enjoy up to 30% off on all room bookings during the holiday season. Don't miss out on this limited-time offer!
            </p>
          </article>

          <article className="news-item">
            <h3>🏖️ Partnership with Local Tour Operators</h3>
            <p>
              Exciting Tours: Ceylon Haven now offers curated tours to explore the beauty of Sri Lanka, including wildlife safaris,
              cultural tours, and beach escapades.
            </p>
          </article>

          <article className="news-item">
            <h3>🍽️ Culinary Events</h3>
            <p><strong>Event:</strong> Flavors of Ceylon</p>
            <p>
              Join us for a special dining experience featuring traditional Sri Lankan dishes prepared by our master chefs.
              Available every Friday and Saturday night.
            </p>
          </article>

          <article className="news-item">
            <h3>🏆 Awards & Recognition</h3>
            <p>
              We are proud to share that Ceylon Haven has been recognized as the "Best Luxury Boutique Hotel in Sri Lanka" by
              Hotel Sri Lank!
            </p>
          </article>

          <article className="news-item">
            <h3>🎶 Live Entertainment Nights</h3>
            <p><strong>When:</strong> Every Saturday Night</p>
            <p>
              Enjoy live music, dance performances, and cultural shows right here at Ceylon Haven.
            </p>
          </article>
        </section>

        <section className="section">
          <h2>Upcoming Events</h2>

          <article className="news-item">
            <h3>🍷 Wine & Dine Under the Stars</h3>
            <p><strong>Date:</strong> 25th of March 2025</p>
            <p>
              An exclusive dinner event featuring wine pairing and a five-course menu crafted by our head chef.
            </p>
          </article>

          <article className="news-item">
            <h3>🧘 Yoga Retreat</h3>
            <p><strong>Date:</strong> 25th of March 2025</p>
            <p>
              Rejuvenate your mind and body with our special yoga retreat hosted by renowned instructors.
            </p>
          </article>
        </section>

        <section className="section">
          <h2>Stay Connected</h2>
          <p>Follow us on social media and subscribe to our newsletter for more updates:</p>
          <ul>
            <li>🌐 <a href="#">Facebook</a></li>
            <li>📷 <a href="#">Instagram</a></li>
            <li>🐦 <a href="#">Twitter</a></li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Ceylon Haven. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NewsPage;
