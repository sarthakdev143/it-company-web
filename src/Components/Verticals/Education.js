import React from 'react'
import Footer from '../Footer/Footer'

const Education = () => {
    return (
        <>
            <section class='section'>
                <div class='header'>
                    <h1>Education</h1>
                    <p>
                        Our education solutions are designed to enhance teaching and learning experiences, improve student outcomes, and streamline administrative processes. From learning management systems (LMS) to e-learning platforms, we develop custom solutions that meet the diverse needs of educational institutions.
                    </p>
                </div>

                <article class='article'>
                    <h2>Services Offered</h2>
                    <ul>
                        <li>Learning Management Systems (LMS)</li>
                        <li>E-learning Platforms</li>
                        <li>Student Information Systems (SIS)</li>
                        <li>Virtual Classroom Solutions</li>
                        <li>Online Course Development</li>
                    </ul>
                </article>

                <article class='article'>
                    <h2>Benefits</h2>
                    <ul>
                        <li>Improved student engagement and retention</li>
                        <li>Enhanced collaboration and communication</li>
                        <li>Streamlined administrative processes</li>
                        <li>Personalized learning experiences</li>
                    </ul>
                </article>
            </section>
            <Footer />
        </>
    )
}

export default Education