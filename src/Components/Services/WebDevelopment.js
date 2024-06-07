import React from 'react';
import './Services.css';
import Footer from '../Footer/Footer';

const WebDevelopment = () => {
    return (
        <>
            <section className="service-section">
                <div className="service-header">
                    <h1>Skyra Tech Solutions Pvt Ltd.</h1>
                    <p>
                        At Skyra Tech Solutions Pvt Ltd, we specialize in creating stunning, responsive, and
                        user-friendly websites that not only look great but also perform exceptionally well. Our web
                        development services are designed to meet the unique needs of each client, ensuring that your online
                        presence is both powerful and effective.
                    </p>
                </div>

                <article className="service-article">
                    <h2>Services Offered</h2>
                    <ul>
                        <li>
                            <strong>Custom Website Design:</strong> Tailored designs that reflect your brand identity and meet your
                            business goals.
                        </li>
                        <li>
                            <strong>Responsive Web Development:</strong> Websites that work seamlessly across all devices and screen
                            sizes.
                        </li>
                        <li>
                            <strong>Content Management Systems (CMS):</strong> Easy-to-use CMS solutions like WordPress, Joomla, and
                            Drupal.
                        </li>
                        <li>
                            <strong>E-commerce Solutions:</strong> Robust e-commerce platforms with secure payment gateways and
                            shopping cart integration.
                        </li>
                        <li>
                            <strong>SEO Optimization:</strong> On-page SEO practices to improve your website’s visibility in search engines.
                        </li>
                    </ul>
                </article>

                <article className="service-article">
                    <h2>Technologies Used</h2>
                    <ul>
                        <li>HTML5, CSS3, JavaScript</li>
                        <li>AngularJS, ReactJS, VueJS</li>
                        <li>PHP, Laravel, CodeIgniter</li>
                        <li>NodeJS, ExpressJS</li>
                        <li>MySQL, PostgreSQL, MongoDB</li>
                    </ul>
                </article>
            </section>
            <Footer />
        </>
    );
}

export default WebDevelopment;
