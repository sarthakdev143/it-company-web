import React from 'react';
import Footer from '../Footer/Footer';
import '../Navlinks.css';

const CloudComputing = () => {
    return (
        <>
            <section className='section'>
                <div className='header'>
                    <h1>Cloud Computing</h1>
                    <p>
                        Our cloud computing services provide scalable, flexible, and cost-effective solutions for your IT infrastructure. We offer cloud migration, management, and optimization services to help you leverage the full potential of the cloud.
                    </p>
                </div>

                <article className='article'>
                    <h2>Key Technologies</h2>
                    <ul>
                        <li><strong>AWS:</strong> Amazon Web Services for comprehensive cloud solutions.</li>
                        <li><strong>Azure:</strong> Microsoft’s cloud platform for building, testing, and deploying applications.</li>
                        <li><strong>Google Cloud Platform:</strong> Suite of cloud computing services by Google.</li>
                        <li><strong>Kubernetes:</strong> Open source container orchestration system for automating application deployment.</li>
                    </ul>
                </article>

                <article className='article'>
                    <h2>Benefits</h2>
                    <ul>
                        <li>Scalability to meet changing business demands.</li>
                        <li>Cost savings with pay-as-you-go pricing models.</li>
                        <li>Improved collaboration and accessibility.</li>
                        <li>Enhanced security and compliance.</li>
                    </ul>
                </article>
            </section>
            <Footer />
        </>
    );
}

export default CloudComputing;
