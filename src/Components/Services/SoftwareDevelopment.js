import React, { useRef } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Services.css';
import Footer from '../Footer/Footer'

const SoftwareDevelopment = () => {
    const sliderRef = useRef();

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const technologies = [
        {
            src: '',
            name: '',
            description: '',
        },
        {
            src: '',
            name: '',
            description: '',
        },
        {
            src: '',
            name: '',
            description: '',
        },
        {
            src: '',
            name: '',
            description: '',
        },
        {
            src: '',
            name: '',
            description: '',
        },
        {
            src: '',
            name: '',
            description: '',
        },
        {
            src: '',
            name: '',
            description: '',
        },
        {
            src: '',
            name: '',
            description: '',
        },
    ];

    return (
        <>
            <section className="service-section">
                <div className="service-header">
                    <h1>Skyra Tech Solutions Pvt Ltd.</h1>
                    <p>
                        We offer comprehensive software development services tailored to meet the unique needs of each
                        client. Our solutions are designed to enhance your business operations, improve efficiency, and drive
                        growth.
                    </p>
                </div>
                <article className="service-article">
                    <h2>Services Offered</h2>
                    <ul>
                        <li><strong>Custom Software Development:</strong> Development of bespoke software solutions to address specific business needs.</li>
                        <li><strong>Enterprise Software Solutions:</strong> Robust and scalable software for large organizations.</li>
                        <li><strong>SaaS Development:</strong> Development of Software as a Service (SaaS) applications.</li>
                        <li><strong>API Integration:</strong> Seamless integration of third-party APIs to enhance functionality.</li>
                        <li><strong>Software Maintenance and Support:</strong> Ongoing support to ensure your software remains up-to-date and functional.</li>
                    </ul>
                </article>

                <article className="service-article service-technologies">
                    <h2>Technologies Used</h2>
                    <Slider ref={sliderRef} {...settings}>
                        {technologies.map((item, index) => (
                            <div className='card-wrapper'>
                                <div key={index} className="tech-card">
                                    <img src={item.src} alt={item.name} />
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </article>
            </section>
            <Footer />
        </>
    );
}

export default SoftwareDevelopment