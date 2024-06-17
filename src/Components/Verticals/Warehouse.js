import React from 'react'
import Footer from '../Footer/Footer'

const Warehouse = () => {
    return (
        <>
            <section class='section'>
                <div class='header'>
                    <h1>Warehouse</h1>
                    <p>
                        Our warehouse solutions are designed to optimize inventory management, streamline operations, and improve productivity in warehouses and distribution centers. From warehouse management systems (WMS) to inventory tracking solutions, we develop custom solutions that meet the unique needs of warehouse operations.
                    </p>
                </div>

                <article class='article'>
                    <h2>Services Offered</h2>
                    <ul>
                        <li>Warehouse Management Systems (WMS)</li>
                        <li>Inventory Tracking Solutions</li>
                        <li>Pick and Pack Systems</li>
                        <li>RFID Solutions</li>
                        <li>Automated Warehouse Solutions</li>
                    </ul>
                </article>

                <article class='article'>
                    <h2>Benefits</h2>
                    <ul>
                        <li>Improved inventory accuracy and visibility</li>
                        <li>Increased efficiency and productivity</li>
                        <li>Reduced operating costs</li>
                        <li>Enhanced customer satisfaction and loyalty</li>
                    </ul>
                </article>
            </section>
            <Footer />
        </>
    )
}

export default Warehouse