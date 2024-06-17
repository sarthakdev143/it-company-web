import React from 'react'
import Footer from '../Footer/Footer'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <>
            <div id="about-us-container">
                <header class="header">
                    <h1>Welcome to Skyra Tech Solutions Pvt Ltd</h1>
                    <p>Where innovation meets excellence</p>
                </header>

                <section class="section">
                    <h2>About Us</h2>
                    <p>
                        As a leading IT solutions provider, we specialize in delivering cutting-edge technology services tailored to meet the unique needs of our clients. Our expertise spans across various domains, including open source development, mobile app development, cross-platform solutions, and advanced technologies like blockchain and IoT.
                    </p>
                    <p>
                        At Skyra Tech Solutions Pvt Ltd, we are committed to providing high-quality, reliable, and scalable solutions that drive business success. Our team of seasoned professionals combines technical prowess with a deep understanding of industry trends to create innovative solutions that exceed expectations.
                    </p>
                    <p>
                        We pride ourselves on our meticulous attention to detail, rigorous quality assurance processes, and dedication to customer satisfaction.
                    </p>
                    <p>
                        Partner with us to experience a seamless blend of technical expertise and a steadfast commitment to delivering excellence in every project we undertake. Let us help you transform your ideas into reality with our comprehensive suite of IT services.
                    </p>
                </section>

                <section class="section">
                    <h2>Why Skyra Tech?</h2>
                    <div>
                        <h3>Mission and Vision</h3>
                        <p>Our mission is to deliver top-notch IT services that empower businesses to achieve their goals. Our vision is to be a global leader in technology solutions, known for our commitment to quality and customer satisfaction.</p>
                    </div>
                    <div>
                        <h3>Team</h3>
                        <p>Meet our team of experienced professionals who bring a wealth of knowledge and expertise to every project. Our team members are dedicated to delivering exceptional results and are always ready to tackle new challenges.</p>
                    </div>
                    <div>
                        <h3>Our Values</h3>
                        <p>We believe in integrity, innovation, and excellence. These core values guide our work and ensure that we provide the highest quality services to our clients.</p>
                    </div>
                    <div>
                        <h3>Achievements</h3>
                        <p>Over the years, we have received numerous awards and recognitions for our outstanding work in the IT industry. These achievements reflect our dedication to delivering excellence.</p>
                    </div>
                </section>

                <section class="section">
                    <h2>What We Provide</h2>
                    <div>
                        <h3>Technologies</h3>
                        <p>Our team is proficient in a wide array of technologies to ensure we can deliver the best solutions for your business needs.</p>
                    </div>
                    <div>
                        <h3>Services</h3>
                        <p>We offer a wide range of services to meet your business needs, from development to consultancy.</p>
                    </div>
                    <div>
                        <h3>Solutions</h3>
                        <p>Our solutions are designed to address specific business challenges and drive success in various domains.</p>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs