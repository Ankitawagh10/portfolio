// Importing React and necessary dependencies
import React from 'react';

// Creating a functional component named ContactUs
const ContactUs = () => {
  return (
    <div>
      {/* Contact section */}
      <section id="contact">
        <div className="contact-section-map-wrapper">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.3020057432855!2d79.0968862726037!3d21.100522542383047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf49b4342149%3A0x9ec772f3a8b942a2!2sTata%20Chowk%2C%20Sewadal%20Nagar%2C%20Omkar%20Nagar%2C%20Nagpur%2C%20Maharashtra%20440034!5e0!3m2!1sen!2sin!4v1689935438195!5m2!1sen!2sin" 
            width="600" 
            height="450" 
            style={{ border: '0' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className="contact-section-form-wrapper">
          <form>
            <h1>CONTACT US</h1>
            <div className="my-3">
              <label htmlFor="name">Fullname</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="my-3">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="my-3">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="7" cols="10" required></textarea>
            </div>
            <div>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </section>
      
      {/* Footer section */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Exporting the ContactUs component
export default ContactUs;
