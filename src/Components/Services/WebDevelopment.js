import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Services.css';
import Footer from '../Footer/Footer';

import pythonIcon from './images-webdev/python_icon.svg';
import reactIcon from './images-webdev/reactjs.svg';
import phpIcon from './images-webdev/php_icon.svg';
import nodejsIcon from './images-webdev/nodejs.svg';
import laravelIcon from './images-webdev/laravel.svg';
import dotnetIcon from './images-webdev/microsoft-dotnet.svg';
import angularIcon from './images-webdev/angularjs.svg';
import javaIcon from './images-webdev/java_icon.svg';

const WebDevelopment = () => {
    const sliderRef = useRef();

    // const next = () => {
    // sliderRef.current.slickNext();
    // };

    // const previous = () => {
    //     sliderRef.current.slickPrev();
    // };

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
            src: pythonIcon,
            name: 'PYTHON',
            description: '',
        },
        {
            src: reactIcon,
            name: 'REACT.JS',
            description: '',
        },
        {
            src: phpIcon,
            name: 'PHP',
            description: '',
        },
        {
            src: nodejsIcon,
            name: 'NODE.JS',
            description: '',
        },
        {
            src: laravelIcon,
            name: 'LARAVEL',
            description: '',
        },
        {
            src: dotnetIcon,
            name: '.NET',
            description: '',
        },
        {
            src: angularIcon,
            name: 'ANGULAR.JS',
            description: '',
        },
        {
            src: javaIcon,
            name: 'JAVA',
            description: '',
        },
    ];

    return (
        <>
            <section className="service-section">
                <div className="service-header">
                    <h1>Skyra Tech Solutions Pvt Ltd.</h1>
                    <p>
                        At Skyra Tech Solutions Pvt Ltd, we specialize in creating stunning, responsive, and
                        user-friendly websites that not only look great but also perform exceptionally well. Our web
                        development services are designed to meet the unique needs of each client, ensuring that your online
                        presence is both powerful and effective.
                    </p>
                </div>

                <article className="service-article">
                    <h2>Services Offered</h2>
                    <ul>
                        <li>
                            <strong>Custom Website Design:</strong> Tailored designs that reflect your brand identity and meet your
                            business goals.
                        </li>
                        <li>
                            <strong>Responsive Web Development:</strong> Websites that work seamlessly across all devices and screen
                            sizes.
                        </li>
                        <li>
                            <strong>Content Management Systems (CMS):</strong> Easy-to-use CMS solutions like WordPress, Joomla, and
                            Drupal.
                        </li>
                        <li>
                            <strong>E-commerce Solutions:</strong> Robust e-commerce platforms with secure payment gateways and
                            shopping cart integration.
                        </li>
                        <li>
                            <strong>SEO Optimization:</strong> On-page SEO practices to improve your website’s visibility in search engines.
                        </li>
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

export default WebDevelopment;
