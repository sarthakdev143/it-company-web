import React from 'react'
import Footer from '../Footer/Footer'

const EnergyUtility = () => {
    return (
        <>
            <section class='section'>
                <div class='header'>
                    <h1>Energy and Utility</h1>
                    <p>
                        Our energy and utility solutions are designed to improve operational efficiency, optimize energy usage, and enhance customer experiences. From smart metering systems to energy management platforms, we develop custom solutions that meet the unique needs of energy and utility companies.
                    </p>
                </div>

                <article class='article'>
                    <h2>Services Offered</h2>
                    <ul>
                        <li>Smart Metering Systems</li>
                        <li>Energy Management Platforms</li>
                        <li>Grid Optimization Solutions</li>
                        <li>Demand Response Systems</li>
                        <li>Customer Engagement Portals</li>
                    </ul>
                </article>

                <article class='article'>
                    <h2>Benefits</h2>
                    <ul>
                        <li>Reduced energy consumption and costs</li>
                        <li>Improved grid reliability and stability</li>
                        <li>Enhanced customer satisfaction and engagement</li>
                        <li>Greater visibility and control over energy usage</li>
                    </ul>
                </article>
            </section>
            <Footer />
        </>
    )
}

export default EnergyUtility