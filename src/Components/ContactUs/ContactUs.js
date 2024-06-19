import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import ReCAPTCHA from 'react-google-recaptcha';
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

    const handleRecaptchaChange = (value) => {
        // When reCAPTCHA is verified, value will be the token
        setIsRecaptchaVerified(true);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isRecaptchaVerified) {
            // Handle form submission logic here (e.g., send data to backend)
            console.log('Form data:', formData);
            // Reset form after submission if needed
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
            setIsRecaptchaVerified(false); // Reset reCAPTCHA verification status
        } else {
            alert('Please complete the reCAPTCHA.');
        }
    };

    return (
        <>
            <section id='contact-us-section'>
                <header id="contact-us-header">
                    <figure>
                        <img loading='lazy' src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvZnR3YXJlJTIwY29tcGFueXxlbnwwfDB8MHx8fDA%3D" alt="404! Cannot Load Contact Us Image!" />
                        <figcaption>Contact Us</figcaption>
                    </figure>
                </header>
                <div id="body">
                    <form onSubmit={handleSubmit}>
                        <div className="input-field">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="input-field">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="input-field">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className="input-field">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                        </div>
                        <div className="input-field">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <ReCAPTCHA className="input-field"
                            sitekey="6LfzxfspAAAAAEO08tacH2l1XV15n97256krM9sY"
                            onChange={handleRecaptchaChange}
                        />
                        <div className="input-field">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ContactUs;
