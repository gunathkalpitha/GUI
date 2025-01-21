import React from "react";
import "./StyleSheet_contact.css"; 

const ContactPage = () => {
  return (
    <div>
     

      <section className="hero3"/>
        

      <main className="contact">
        <section className="section">
          <h1>Contact Us</h1>
          <br />
          <h1>We’d Love to Hear from You!</h1>
          <p>
            At Ceylon Haven, we’re here to make your stay as memorable and seamless as possible. Have questions, feedback, or
            inquiries about your booking? Reach out to us anytime!
          </p>
        </section>

        <section className="section">
          <h2>Contact Information</h2>
          <p>
            <strong>📍 Location:</strong> Ceylon Haven Main Hotel, 123 Paradise Road, Colombo, Sri Lanka
          </p>
          <p>
            <strong>📞 Phone Numbers:</strong>
          </p>
          <ul>
            <li>Reservations: +94 11 234 5678</li>
            <li>Customer Support: +94 11 876 5432</li>
          </ul>
          <p>
            <strong>📧 Email:</strong>
          </p>
          <ul>
            <li>General Inquiries: info@ceylonhaven.lk</li>
            <li>Reservations: reservations@ceylonhaven.lk</li>
          </ul>
          <p>
            <strong>⏰ Working Hours:</strong>
          </p>
          <ul>
            <li>Monday to Friday: 8:00 AM – 8:00 PM</li>
            <li>Saturday & Sunday: 9:00 AM – 6:00 PM</li>
          </ul>
        </section>

        <section className="section">
          <h2>Get in Touch</h2>
          <form className="contact-form">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="tel" name="phone" placeholder="Phone Number (Optional)" />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>

        <section className="section">
          <h2>Follow Us on Social Media</h2>
          <p>Stay updated with our latest offers and news:</p>
          <ul>
            <li>
              🌐 <a href="https://facebook.com/ceylonhaven" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li>
              📷 <a href="https://instagram.com/ceylonhaven" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            <li>
              🐦 <a href="https://twitter.com/ceylonhaven" target="_blank" rel="noopener noreferrer">Twitter</a>
            </li>
          </ul>
        </section>

        <section className="section map">
          <h2>Map Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.9315562348195!2d79.86012387474777!3d6.927079395192742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259324f6ffb99%3A0xe4b48a5657f93bdb!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1697383871921!5m2!1sen!2slk"
            width="600"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ceylon Haven Map Location"
          ></iframe>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Ceylon Haven. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
