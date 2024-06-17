import React from 'react'
import Footer from '../Footer/Footer'

const BankingFinance = () => {
    return (
        <>
            <section class='section'>
                <div class='header'>
                    <h1>Banking and Finance</h1>
                    <p>
                        Our banking and finance solutions are designed to enhance operational efficiency, improve customer experiences, and drive growth for financial institutions. From online banking portals to fintech applications, we develop custom solutions that meet the unique needs of the banking and finance industry.
                    </p>
                </div>

                <article class='article'>
                    <h2>Services Offered</h2>
                    <ul>
                        <li>Online Banking Portals</li>
                        <li>Fintech Applications</li>
                        <li>Mobile Wallet Solutions</li>
                        <li>Investment Management Platforms</li>
                        <li>Loan Origination Systems</li>
                    </ul>
                </article>

                <article class='article'>
                    <h2>Benefits</h2>
                    <ul>
                        <li>Improved customer satisfaction and loyalty</li>
                        <li>Enhanced security and compliance</li>
                        <li>Increased operational efficiency and productivity</li>
                        <li>Greater agility and innovation</li>
                    </ul>
                </article>
            </section>
            <Footer />
        </>
    )
}

export default BankingFinance