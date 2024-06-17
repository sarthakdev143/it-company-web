import React from 'react'
import Footer from '../Footer/Footer'

const Ecommerce = () => {
    return (
        <>
            <section class='section'>
                <div class='header'>
                    <h1>E-commerce</h1>
                    <p>
                        Our e-commerce solutions are designed to drive online sales, enhance customer experiences, and grow revenue for businesses. From custom e-commerce platforms to mobile shopping apps, we develop solutions that meet the unique needs of e-commerce businesses.
                    </p>
                </div>

                <article class='article'>
                    <h2>Services Offered</h2>
                    <ul>
                        <li>E-commerce Website Development</li>
                        <li>Mobile Shopping Apps</li>
                        <li>Payment Gateway Integration</li>
                        <li>Shopping Cart Solutions</li>
                        <li>Product Recommendation Engines</li>
                    </ul>
                </article>

                <article class='article'>
                    <h2>Benefits</h2>
                    <ul>
                        <li>Increased online sales and revenue</li>
                        <li>Enhanced customer satisfaction and loyalty</li>
                        <li>Streamlined shopping experience</li>
                        <li>Personalized marketing and promotions</li>
                    </ul>
                </article>
            </section>
            <Footer />
        </>
    )
}

export default Ecommerce