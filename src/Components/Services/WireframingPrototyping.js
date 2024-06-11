import React, { useRef } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Navlinks.css';
import Footer from '../Footer/Footer'

const WireframingPrototyping = () => {
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
            <section className="section">
                <div className="header">
                    <h1>Skyra Tech Solutions Pvt Ltd.</h1>
                    <p>
                        Our wireframing and prototyping services are designed to help you visualize and refine your
                        project before development begins. We create detailed wireframes and interactive prototypes that
                        provide a clear understanding of the user experience and functionality.
                    </p>
                </div>
                <article className="article">
                    <h2>Services Offered</h2>
                    <ul>
                        <li><strong>Wireframing:</strong> Creating detailed wireframes to outline the structure and layout of your application.</li>
                        <li><strong>Prototyping:</strong> Developing interactive prototypes to simulate the user experience.</li>
                        <li><strong>UI/UX Design:</strong> Designing intuitive and engaging user interfaces.</li>
                        <li><strong>User Testing:</strong> Conducting user testing to gather feedback and make necessary improvements.</li>
                        <li><strong>Iteration and Refinement:</strong> Continuous refinement of wireframes and prototypes based on feedback.</li>
                    </ul>
                </article>

                <article className="article technologies">
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

export default WireframingPrototyping