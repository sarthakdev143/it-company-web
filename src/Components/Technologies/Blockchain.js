import React from 'react';
import Footer from '../Footer/Footer';
import '../Navlinks.css';

const Blockchain = () => {
    return (
        <>
            <section className='section'>
                <div className='header'>
                    <h1>Blockchain</h1>
                    <p>
                        Our blockchain solutions offer secure, transparent, and decentralized systems for various applications. From financial services to supply chain management, we leverage blockchain technology to enhance trust, security, and efficiency.
                    </p>
                </div>

                <article className='article'>
                    <h2>Key Technologies</h2>
                    <ul>
                        <li><strong>Ethereum:</strong> Decentralized platform for building smart contracts and decentralized applications (DApps).</li>
                        <li><strong>Hyperledger:</strong> Open source blockchain framework for developing enterprise-grade applications.</li>
                        <li><strong>Bitcoin:</strong> Cryptocurrency and digital payment system.</li>
                        <li><strong>Smart Contracts:</strong> Self-executing contracts with the terms of the agreement directly written into code.</li>
                    </ul>
                </article>

                <article className='article'>
                    <h2>Benefits</h2>
                    <ul>
                        <li>Enhanced security with decentralized networks.</li>
                        <li>Transparent and immutable transaction records.</li>
                        <li>Reduced costs and improved efficiency.</li>
                        <li>Greater trust and accountability in business processes.</li>
                    </ul>
                </article>
            </section>
            <Footer />
        </>
    );
}

export default Blockchain;
