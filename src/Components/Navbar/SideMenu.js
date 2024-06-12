import React from 'react';
import './SideMenu.css';

const SideMenu = ({ isActive, closeMenu }) => {
    return (
        <div id='side-menu-wrapper' className={isActive ? 'active' : ''}>
            <section id='side-menu' className={isActive ? 'active' : ''}>
                <i onClick={closeMenu} class="close-side-menu pointer ri-close-large-line"></i>
                <figure>
                    <img src={require('./Skyra_Tech_logo.png')} alt='404! Logo Not Found!' />
                </figure>
                <div>
                    <article>
                        <br/> Skyra Tech Solutions Pvt Ltd is a premier IT solutions provider, specializing in cutting-edge services like open source development, mobile app creation, and advanced technologies such as blockchain and IoT.
                    </article>
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
                        <ul type='none' className='faic s-gap'>
                            <li className='pointer'><i className="ri-twitter-x-fill"></i></li>
                            <li className='pointer'><i className="ri-facebook-circle-fill"></i></li>
                            <li className='pointer'><i className="ri-linkedin-line"></i></li>
                            <li className='pointer'><i className="ri-instagram-line"></i></li>
                            <li className='pointer'><i className="ri-youtube-fill"></i></li>
                        </ul>
                    </div>
                </div>
            </section>
            <div id='back-screen' className={isActive ? 'active' : ''} title='Click Anywhere To Close Sidebar' onClick={closeMenu}></div>
        </div >
    );
}

export default SideMenu;
