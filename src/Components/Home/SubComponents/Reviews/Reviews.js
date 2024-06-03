import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import './Reviews.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
    const [expanded, setExpanded] = useState({});
    const sliderRef = useRef();

    const toggleReadMore = (index) => {
        setExpanded((prevState) => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    const reviewsData = [
        {
            name: 'Jane Smith',
            date: '19-05-2024',
            text: 'Working with Skyra Tech Solutions Pvt Ltd was a game-changer for our business. Their web development team created a stunning, responsive website that truly represents our brand. The entire process was seamless, and their attention to detail was exceptional. We have received numerous compliments from our clients on the new site, and our online presence has significantly improved.'
        },
        {
            name: 'John Doe',
            date: '18-05-2024',
            text: 'The mobile app developed by Skyra Tech team has transformed the way we interact with our customers. Their team understood our vision perfectly and delivered an app that exceeded our expectations. The user interface is intuitive, and the app\'s performance is flawless. We\'ve seen a significant increase in user engagement and customer satisfaction.'
        },
        {
            name: 'Emma Brown',
            date: '17-05-2024',
            text: 'Our e-commerce platform built by the team has been a tremendous success. Their expertise in e-commerce solutions is evident in every aspect of our site. From the secure payment integration to the user-friendly product management system, everything works seamlessly. Our sales have increased by 40% since the launch, and we couldn\'t be happier with the results.'
        },
        {
            name: 'Sarah Lee',
            date: '16-05-2024',
            text: 'The custom software solution developed by Skyra Tech Solutions Pvt has revolutionized our operations. Their team took the time to understand our unique needs and delivered a robust, scalable application that integrates perfectly with our existing systems. The software has streamlined our workflows, improved data accuracy, and enhanced overall productivity. Their professionalism and technical expertise are second to none.'
        },
        {
            name: 'Laura Thompson',
            date: '15-05-2024',
            text: 'The UI/UX design team took our project to the next level. They created a user-centered design that not only looks beautiful but also enhances the overall user experience. Their attention to detail and understanding of our target audience were evident throughout the project. The feedback from our users has been overwhelmingly positive.'
        }
    ];
    

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

    return (
        <section id='reviews' className='faic'>
            <aside className='fdc center1 faic'>
                <h1>Excellent</h1>
                <span className='rating'>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                </span>
                <p>Based On <b>5 Reviews</b></p>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png' alt='Google Image' />
            </aside>
            <div id='carousel-wrapper' className='faic'>
                <div className="navigation-button">
                    <button onClick={previous}>
                        <span class="material-symbols-outlined">
                            chevron_left
                        </span>
                    </button>
                </div>
                <Slider {...settings} ref={sliderRef}>
                    {reviewsData.map((review, index) => (
                        <div key={index} className={`review fdc ${expanded[index] ? 'expanded' : ''}`}>
                            <div className='review-head faic'>
                                <div className='profile-details faic'>
                                    <img className='profile-pic' src='https://images.unsplash.com/placeholder-avatars/extra-large.jpg?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' alt='Profile Picture' />
                                    <div className='fdc'>
                                        <h3>{review.name}</h3>
                                        <span>{review.date}</span>
                                    </div>
                                </div>
                                <img className='google-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png' alt='Google Logo' />
                            </div>
                            <div className='review-body fdc s-gap'>
                                <span className='rating faic'>
                                    <span className="material-symbols-outlined">star</span>
                                    <span className="material-symbols-outlined">star</span>
                                    <span className="material-symbols-outlined">star</span>
                                    <span className="material-symbols-outlined">star</span>
                                    <span className="material-symbols-outlined">star</span>
                                </span>
                                <p className={`review-text ${expanded[index] ? 'expanded' : ''}`}>
                                    {review.text}
                                </p>
                                <button className='read-more' onClick={() => toggleReadMore(index)}>
                                    {expanded[index] ? 'Show Less' : 'Read More'}
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="navigation-button">
                    <button onClick={next}>
                        <span class="material-symbols-outlined">
                            chevron_right
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Reviews;