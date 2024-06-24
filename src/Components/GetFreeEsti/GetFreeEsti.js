import React from 'react';
import './GetFreeEsti.css';

const GetFreeEsti = () => {
  return (
    <section id='get-free-estimation'>
      <h2>Get Your Free Project Estimation</h2>
      <p>Fill out the form below to receive a free project estimation. Our team will review your requirements and get back to you with a detailed quote.</p>
      <form action="/submit-estimation" method="POST" enctype="multipart/form-data">
        <div className="input-field">
          <input type="text" id="name" name="name" placeholder="Name" required />
        </div>

        <div className="input-field">
          <input type="email" id="email" name="email" placeholder="Email Address" required />
        </div>

        <div className="input-field">
          <input type="tel" id="phone" name="phone" placeholder="Phone Number" required />
        </div>

        <div className="input-field">
          <input type="text" id="company" name="company" placeholder="Company Name (optional)" />
        </div>

        <div className="input-field">
          <select id="project-type" name="project-type" required>
            <option value="">Project Type</option>
            <option value="web-development">Web Development</option>
            <option value="mobile-app-development">Mobile App Development</option>
            <option value="e-commerce-development">E-Commerce Development</option>
            <option value="digital-transformation">Digital Transformation</option>
            <option value="software-development">Software Development</option>
            <option value="chatbot-development">Chatbot Development</option>
            <option value="it-consultancy">IT Consultancy</option>
            <option value="wireframing-prototyping">Wireframing & Prototyping</option>
            <option value="mvp-development">MVP Development</option>
            <option value="other">Other (Please specify)</option>
          </select>
        </div>

        <div className="input-field">
          <textarea id="description" name="description" placeholder="Project Description" required></textarea>
        </div>

        <div className="input-field">
          <select id="budget" name="budget" required>
            <option value="">Budget Range</option>
            <option value="100-1000">$100 - $1,000</option>
            <option value="1001-5000">$1,001 - $5,000</option>
            <option value="5001-10000">$5,001 - $10,000</option>
            <option value="10001-20000">$10,001 - $20,000</option>
            <option value="20001-50000">$20,001 - $50,000</option>
            <option value="50001+">$50,001+</option>
          </select>
        </div>

        <div className="input-field">
          <input type="date" id="start-date" name="start-date" placeholder="Preferred Start Date" required />
        </div>

        <div className="input-field">
          <input type="file" id="files" name="files" accept=".pdf, .doc, .docx, .png, .jpg" />
        </div>

        <div className="input-field">
          <textarea id="additional-info" name="additional-info" placeholder="Additional Information"></textarea>
        </div>

        <div className="input-field">
          <input type="text" id="captcha" name="captcha" placeholder="Captcha" required />
        </div>

        <button type="submit">Get Free Estimation</button>
      </form>
    </section>
  );
};

export default GetFreeEsti;
