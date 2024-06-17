import React from 'react';
import Footer from '../Footer/Footer';
import '../Navlinks.css';

const IoT = () => {
    return (
        <>
            <section className='section'>
                <div className='header'>
                    <h1>Internet Of Things (IoT)</h1>
                    <p>
                        Our IoT solutions connect physical devices to the internet, enabling real-time data collection, monitoring, and control. We develop smart systems that improve efficiency, productivity, and decision-making across various industries.
                    </p>
                </div>

                <article className='article'>
                    <h2>Key Technologies</h2>
                    <ul>
                        <li><strong>Arduino/Raspberry Pi:</strong> Hardware platforms for developing IoT prototypes.</li>
                        <li><strong>MQTT:</strong> Lightweight messaging protocol for small sensors and mobile devices.</li>
                        <li><strong>AWS IoT/Google Cloud IoT:</strong> Cloud platforms for managing IoT devices and data.</li>
                        <li><strong>Node-RED:</strong> Flow-based development tool for visual programming of IoT applications.</li>
                    </ul>
                </article>

                <article className='article'>
                    <h2>Benefits</h2>
                    <ul>
                        <li>Real-time monitoring and data collection.</li>
                        <li>Improved efficiency and reduced operational costs.</li>
                        <li>Enhanced decision-making with data-driven insights.</li>
                        <li>Seamless integration with existing systems and processes.</li>
                    </ul>
                </article>
            </section>
            <Footer />
        </>
    );
}

export default IoT;
