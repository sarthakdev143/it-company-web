import React from 'react';
import Footer from '../Footer/Footer';
import '../Navlinks.css';

const RubyOnRails = () => {
    return (
        <>
            <section className='section'>
                <div className='header'>
                    <h1>Skyra Tech Solutions Pvt Ltd.</h1>
                    <p>
                        Ruby on Rails (RoR) is a powerful web application framework that enables rapid development and clean, maintainable code. Our team specializes in creating scalable and high-performance web applications using RoR.
                    </p>
                </div>

                <article className='article'>
                    <h2>Key Features</h2>
                    <ul>
                        <li><strong>Convention over Configuration:</strong> Simplifies the development process by making assumptions about what developers need.</li>
                        <li><strong>Active Record:</strong> Object-relational mapping system for database interactions.</li>
                        <li><strong>MVC Architecture:</strong> Separates application logic, presentation, and data, making the code more organized and maintainable.</li>
                        <li><strong>Scaffolding:</strong> Generates boilerplate code to quickly set up basic CRUD operations.</li>
                    </ul>
                </article>

                <article className='article'>
                    <h2>Benefits</h2>
                    <ul>
                        <li>Rapid development with fewer lines of code.</li>
                        <li>Highly maintainable and scalable applications.</li>
                        <li>Strong community support and frequent updates.</li>
                        <li>Built-in security features.</li>
                    </ul>
                </article>
            </section>
            <Footer />
        </>
    );
}

export default RubyOnRails;
