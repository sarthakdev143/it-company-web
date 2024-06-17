import React, { useRef } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Navlinks.css';
import Footer from '../Footer/Footer'

import swift from './images/Swift.svg';
import objective_c from './images/Objective-C.svg';
import kotlin from './images/Kotlin.svg';
import java from './images/Java.svg';
import react_native from './images/React.svg';
import flutter from './images/Flutter.svg';
import firebase from './images/Firebase.svg';
import SQLite from './images/SQLite.svg';

const MobileDevelopment = () => {
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
      src: swift,
      name: 'Swift',
      description: '',
    },
    {
      src: objective_c,
      name: 'Objective-C (iOS)',
      description: '',
    },
    {
      src: kotlin,
      name: 'Kotlin',
      description: '',
    },
    {
      src: java,
      name: 'Java (Android)',
      description: '',
    },
    {
      src: react_native,
      name: 'React Native',
      description: '',
    },
    {
      src: flutter,
      name: 'Flutter',
      description: '',
    },
    {
      src: firebase,
      name: 'Firebase',
      description: '',
    },
    {
      src: SQLite,
      name: 'SQLite',
      description: '',
    },
  ];

  return (
    <>
      <section className="section">
        <div className="header">
          <h1>Mobile App Development</h1>
          <p>
            Our mobile app development services are designed to create innovative and user-friendly
            applications for both iOS and Android platforms. We leverage the latest technologies and best practices
            to develop apps that provide a seamless user experience and meet your business objectives.
          </p>
        </div>

        <article className="article">
          <h2>Services Offered</h2>
          <ul>
            <li><strong>iOS App Development:</strong> Custom app development for iPhone and iPad using Swift and Objective-C.</li>
            <li><strong>Android App Development:</strong> High-performance Android apps using Kotlin and Java.</li>
            <li><strong>Cross-Platform Development:</strong> Efficient cross-platform apps using React Native and Flutter.</li>
            <li><strong>UI/UX Design:</strong> Intuitive and engaging designs for mobile applications.</li>
            <li><strong>App Maintenance and Support:</strong> Ongoing support and maintenance to ensure your app remains up-to-date and functional.</li>
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

export default MobileDevelopment