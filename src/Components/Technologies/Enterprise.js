import React from 'react';
import Footer from '../Footer/Footer';
import '../Navlinks.css';

const Enterprise = () => {
    return (
        <>
            <section className='section'>
                <div className='header'>
                    <h1>Enterprise</h1>
                    <p>
                        Our enterprise solutions are designed to meet the complex needs of large organizations. We offer scalable, secure, and efficient enterprise software that enhances operational efficiency, facilitates decision-making, and drives business growth.
                    </p>
                </div>

                <article className='article'>
                    <h2>Key Technologies</h2>
                    <ul>
                        <li><strong>Java:</strong> Versatile programming language for building enterprise-grade applications.</li>
                        <li><strong>.NET:</strong> Framework for creating robust and scalable enterprise solutions.</li>
                        <li><strong>SAP:</strong> Comprehensive enterprise resource planning (ERP) software.</li>
                        <li><strong>Oracle:</strong> Advanced database and enterprise software solutions.</li>
                        <li><strong>Microsoft Dynamics:</strong> Suite of enterprise applications for CRM and ERP.</li>
                    </ul>
                </article>

                <article className='article'>
                    <h2>Benefits</h2>
                    <ul>
                        <li>Scalable solutions to grow with your business.</li>
                        <li>High security standards to protect sensitive data.</li>
                        <li>Integration with existing systems and processes.</li>
                        <li>Improved operational efficiency and productivity.</li>
                    </ul>
                </article>
            </section>
            <Footer />
        </>
    );
}

export default Enterprise;
