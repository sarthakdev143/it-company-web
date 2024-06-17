import React from 'react'
import Footer from '../Footer/Footer'

const FoodRestaurant = () => {
    return (
        <>
            <section class='section'>
                <div class='header'>
                    <h1>Food and Restaurant</h1>
                    <p>
                        Our food and restaurant solutions are designed to streamline operations, enhance customer experiences, and drive revenue for restaurants and food businesses. From online ordering systems to table reservation platforms, we develop custom solutions that meet the unique needs of the food industry.
                    </p>
                </div>

                <article class='article'>
                    <h2>Services Offered</h2>
                    <ul>
                        <li>Online Ordering Systems</li>
                        <li>Table Reservation Platforms</li>
                        <li>POS Integration</li>
                        <li>Loyalty Program Development</li>
                        <li>Menu Management Solutions</li>
                    </ul>
                </article>

                <article class='article'>
                    <h2>Benefits</h2>
                    <ul>
                        <li>Increased revenue and profitability</li>
                        <li>Enhanced customer satisfaction and loyalty</li>
                        <li>Streamlined operations and workflows</li>
                        <li>Improved marketing and promotions</li>
                    </ul>
                </article>
            </section>
            <Footer />
        </>
    )
}

export default FoodRestaurant