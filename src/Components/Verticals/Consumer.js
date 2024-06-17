import React from 'react'
import Footer from '../Footer/Footer'

const Consumer = () => {
    return (
        <>
            <section class='section'>
                <div class='header'>
                    <h1>Consumer-Focused</h1>
                    <p>
                        Our consumer-focused solutions are designed to enhance the customer experience and drive engagement across various industries. From mobile apps to e-commerce platforms, we develop user-friendly solutions that delight customers and drive business growth.
                    </p>
                </div>

                <article class='article'>
                    <h2>Services Offered</h2>
                    <ul>
                        <li>Mobile App Development</li>
                        <li>E-commerce Solutions</li>
                        <li>Customer Relationship Management (CRM)</li>
                        <li>Loyalty Program Development</li>
                        <li>User Experience Design</li>
                    </ul>
                </article>

                <article class='article'>
                    <h2>Benefits</h2>
                    <ul>
                        <li>Increased customer satisfaction and loyalty</li>
                        <li>Enhanced brand visibility and recognition</li>
                        <li>Improved conversion rates and sales</li>
                        <li>Personalized and targeted marketing campaigns</li>
                    </ul>
                </article>
            </section>
            <Footer />
        </>
    )
}

export default Consumer