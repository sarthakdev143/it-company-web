import React from 'react'
import Footer from '../Footer/Footer'

const Healthcare = () => {
    return (
        <>
            <section class='section'>
                <div class='header'>
                    <h1>Our Healthcare</h1>
                    <p>
                        Our healthcare solutions are designed to improve patient care, streamline operations, and enhance efficiency in healthcare organizations. From electronic health records (EHR) systems to telemedicine platforms, we develop custom solutions that meet the unique needs of healthcare providers.
                    </p>
                </div>

                <article class='article'>
                    <h2>Services Offered</h2>
                    <ul>
                        <li>EHR/Electronic Medical Records (EMR) Systems</li>
                        <li>Telemedicine Solutions</li>
                        <li>Health Information Exchange (HIE)</li>
                        <li>Patient Portal Development</li>
                        <li>Medical Billing Software</li>
                    </ul>
                </article>

                <article class='article'>
                    <h2>Benefits</h2>
                    <ul>
                        <li>Improved patient outcomes</li>
                        <li>Enhanced efficiency and productivity</li>
                        <li>Secure and compliant solutions</li>
                        <li>Seamless integration with existing systems</li>
                    </ul>
                </article>
            </section>
            <Footer />
        </>
    )
}

export default Healthcare