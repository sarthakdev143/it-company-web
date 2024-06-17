import React from 'react'
import Footer from '../Footer/Footer'

const Manufacturing = () => {
    return (
        <>
            <section class='section'>
                <div class='header'>
                    <h1>Manufacturing</h1>
                    <p>
                        Our manufacturing solutions are designed to improve efficiency, reduce costs, and enhance productivity in manufacturing operations. From production planning systems to supply chain management solutions, we develop custom solutions that meet the unique needs of manufacturers.
                    </p>
                </div>

                <article class='article'>
                    <h2>Services Offered</h2>
                    <ul>
                        <li>Production Planning Systems</li>
                        <li>Supply Chain Management Solutions</li>
                        <li>Inventory Management Software</li>
                        <li>Quality Management Systems (QMS)</li>
                        <li>Manufacturing Execution Systems (MES)</li>
                    </ul>
                </article>

                <article class='article'>
                    <h2>Benefits</h2>
                    <ul>
                        <li>Increased efficiency and productivity</li>
                        <li>Reduced operating costs</li>
                        <li>Enhanced quality control and compliance</li>
                        <li>Greater visibility and control over manufacturing processes</li>
                    </ul>
                </article>
            </section>
            <Footer />
        </>
    )
}

export default Manufacturing