import React from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-content">
                <h2>Contact Us</h2>
                <p>Have questions, suggestions, or feedback? We'd love to hear from you!</p>
                <div className="contact-info">
                    <p><strong>Email:</strong> info@kinectvolunteer.com</p>
                    <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                    <p><strong>Address:</strong> 123 Volunteer St, City, State, Zip</p>
                </div>
                <div className="contact-form">
                    <h3>Send us a Message</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
