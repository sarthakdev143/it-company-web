import React, { useRef } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Navlinks.css';
import Footer from '../Footer/Footer'

import Magento from './images/Magneto.svg';
import WooCommerce from './images/WooCommerce.svg';
import HTML5 from './images/HTML5.png';
import CSS3 from './images/CSS3.svg';
import JS from './images/JavaScript.svg';
import PHP from './images/PHP.svg';
import Laravel from './images/Laravel.svg';
import NodeJS from './images/Node.js.svg';
import MySQL from './images/MySQL.svg';
import PostgreSQL from './images/PostgresSQL.svg';

const ECommerceDevelopment = () => {
    const sliderRef = useRef();

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
            src: Magento,
            name: 'Magento',
            description: '',
        },
        {
            src: WooCommerce,
            name: 'WooCommerce',
            description: '',
        },
        {
            src: HTML5,
            name: 'HTML5',
            description: '',
        },
        {
            src: CSS3,
            name: 'CSS3',
            description: '',
        },
        {
            src: JS,
            name: 'Javascript',
            description: '',
        },
        {
            src: PHP,
            name: 'PHP',
            description: '',
        },
        {
            src: Laravel,
            name: 'Laravel',
            description: '',
        },
        {
            src: NodeJS,
            name: 'NodeJS',
            description: '',
        },
        {
            src: MySQL,
            name: 'MySQL',
            description: '',
        },
        {
            src: PostgreSQL,
            name: 'PostgreSQL',
            description: '',
        },
    ];

    return (
        <>
            <section className="section">
                <div className="header">
                    <h1>Skyra Tech Solutions Pvt Ltd.</h1>
                    <p>
                        We provide comprehensive e-commerce development services to help you build a successful
                        online store. Our solutions are designed to enhance the shopping experience, improve customer
                        engagement, and drive sales.
                    </p>
                </div>
                <article className="article">
                    <h2>Services Offered</h2>
                    <ul>
                        <li><strong>Custom E-Commerce Solutions:</strong> Tailored e-commerce platforms that meet your specific business requirements.</li>
                        <li><strong>Platform Integration:</strong> Expertise in platforms like Magento, Shopify, WooCommerce, and BigCommerce.</li>
                        <li><strong>Secure Payment Integration:</strong> Integration of secure payment gateways to ensure safe transactions.</li>
                        <li><strong>Product Management:</strong> Easy-to-use interfaces for managing products, inventory, and orders.</li>
                        <li><strong>SEO and Marketing Tools:</strong> Tools and strategies to improve your store’s visibility and attract more customers.</li>
                    </ul>
                </article>

                <article className="article technologies">
                    <h2>Technologies Used</h2>
                    <Slider ref={sliderRef} {...settings}>
                        {technologies.map((item, index) => (
                            <div className='card-wrapper'>
                                <div key={index} className="tech-card">
                                    <img src={item.src} t={item.name} />
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

export default ECommerceDevelopment