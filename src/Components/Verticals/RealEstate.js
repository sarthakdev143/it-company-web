import React from 'react'
import Footer from '../Footer/Footer'

const RealEstate = () => {
    return (
        <>
            <section class='section'>
                <div class='header'>
                    <h1>Real Estate</h1>
                    <p>
                        Our real estate solutions are designed to streamline property management, enhance client experiences, and drive sales for real estate professionals. From property listing platforms to CRM systems, we develop custom solutions that meet the unique needs of the real estate industry.
                    </p>
                </div>

                <article class='article'>
                    <h2>Services Offered</h2>
                    <ul>
                        <li>Property Listing Platforms</li>
                        <li>CRM Systems for Real Estate</li>
                        <li>Virtual Property Tours</li>
                        <li>Property Management Software</li>
                        <li>Transaction Management Solutions</li>
                    </ul>
                </article>

                <article class='article'>
                    <h2>Benefits</h2>
                    <ul>
                        <li>Increased efficiency in property management</li>
                        <li>Enhanced client experiences and satisfaction</li>
                        <li>Improved lead generation and conversion</li>
                        <li>Streamlined transactions and workflows</li>
                    </ul>
                </article>
            </section>
            <Footer />
        </>
    )
}

export default RealEstate