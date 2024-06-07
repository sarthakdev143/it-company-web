import React from 'react'
import './SideMenu.css'

const SideMenu = () => {

    return (
        <div id='side-menu-wrapper'>
            <section id='side-menu' className=''>
                <figure>
                    <img src='' alt='404! Logo Not Found!' />
                    <article>
                        Skyra Tech Solutions Pvt Ltd is a premier IT solutions provider, specializing in cutting-edge services like open source development, mobile app creation, and advanced technologies such as blockchain and IoT.
                    </article>
                </figure>
                <div id='info-wrapper'>
                    <div id='info'>
                        <h1>address</h1>
                        <p>703 Vijay Nagar, Indore, 452010 India</p>
                    </div>
                    <div id='info'>
                        <h1>phone</h1>
                        <p>+91-9981560424</p>
                    </div>
                    <div id='info'>
                        <h1>email</h1>
                        <p>info@skyratech.in</p>
                    </div>
                </div>
                <ul type='none' className='faic s-gap'>
                    <li className='pointer'><i className="ri-twitter-x-fill"></i></li>
                    <li className='pointer'><i className="ri-facebook-circle-fill"></i></li>
                    <li className='pointer'><i className="ri-linkedin-line"></i></li>
                    <li className='pointer'><i className="ri-instagram-line"></i></li>
                    <li className='pointer'><i className="ri-youtube-fill"></i></li>
                </ul>
            </section>
            <div id='back-screen' className='' title='Click Anywhere To Close Sidebar'></div>
        </div>
    )
}

export default SideMenu