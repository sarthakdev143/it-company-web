import React from 'react'
import Footer from '../Footer/Footer'

const Testing = () => {
    return (
        <>
            <section class='section'>
                <div class='header'>
                    <h1>Testing</h1>
                    <p>
                        Our comprehensive testing services ensure the quality, performance, and reliability of your software applications. We offer a range of testing services, including manual and automated testing, to identify and fix issues before they impact your users.
                    </p>
                </div>

                <article class='article'>
                    <h2>Key Technologies</h2>
                    <ul>
                        <li>Selenium: Open source tool for automating web applications.</li>
                        <li>JUnit/TestNG: Testing frameworks for Java applications.</li>
                        <li>Appium: Automation framework for mobile app testing.</li>
                        <li>JIRA/Xray: Tools for test management and issue tracking.</li>
                    </ul>
                </article>

                <article class='article'>
                    <h2>Types of Testing</h2>
                    <ul>
                        <li>Functional Testing: Ensures that the application functions as expected.</li>
                        <li>Performance Testing: Assesses the application's responsiveness and stability under load.</li>
                        <li>Security Testing: Identifies vulnerabilities and ensures data protection.</li>
                        <li>Usability Testing: Evaluates the user experience and interface.</li>
                    </ul>
                </article>

                <article class='article'>
                    <h2>Benefits</h2>
                    <ul>
                        <li>Improved software quality and reliability.</li>
                        <li>Faster time-to-market with automated testing.</li>
                        <li>Enhanced user satisfaction with bug-free applications.</li>
                        <li>Reduced costs associated with post-release defects.</li>
                    </ul>
                </article>
            </section>
            <Footer />
        </>
    )
}

export default Testing