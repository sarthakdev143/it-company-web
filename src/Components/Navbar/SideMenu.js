import React, { useState } from 'react';
import './SideMenu.css';
import { NavLink } from 'react-router-dom';

const SideMenu = ({ isActive, closeMenu }) => {
    const [dropdownOpen, setDropdownOpen] = useState({
        services: false,
        verticals: false,
        technologies: false,
    });

    const toggleDropdown = (dropdown) => {
        setDropdownOpen(prevState => ({
            ...prevState,
            [dropdown]: !prevState[dropdown]
        }));
    };

    return (
        <div id='side-menu-wrapper' className={isActive ? 'active' : ''}>
            <section id='side-menu' className={isActive ? 'active' : ''}>
                <i onClick={closeMenu} className="close-side-menu pointer ri-close-large-line"></i>
                <figure>
                    <img src={require('./Skyra_Tech_logo.png')} alt='404! Logo Not Found!' />
                </figure>
                <div>
                    <article>
                        <br /> Skyra Tech Solutions Pvt Ltd is a premier IT solutions provider, specializing in cutting-edge services like open source development, mobile app creation, and advanced technologies such as blockchain and IoT.
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
                <section id='navbar-links'>
                    <i onClick={closeMenu} className="close-side-menu pointer ri-close-large-line"></i>
                    <figure>
                        <img src={require('./Skyra_Tech_logo.png')} alt='404! Logo Not Found!' />
                    </figure>
                    <h1>Navbar Links...</h1>
                    <ul type='none'>
                        <li>
                            <NavLink to='/' className='parent' onClick={closeMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className='parent' onClick={closeMenu}>
                                About
                            </NavLink>
                        </li>
                        <li id='dropdown'>
                            <a className='pointer parent' onClick={() => toggleDropdown('services')}>
                                <span>Services</span> <i className={`ri-arrow-drop-down-line  ${dropdownOpen.services ? 'rotate' : ''}`}></i>
                            </a>
                            <div className={`dropdown-content-wrapper ${dropdownOpen.services ? 'show' : ''}`}>
                                <ul className='fdc' id="dropdown-content">
                                    <li className='faic'>
                                        <NavLink to='web-development' onClick={closeMenu}>
                                            Web Development
                                        </NavLink>
                                        <i className="ri-arrow-right-line"></i>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='mobile-app-development' onClick={closeMenu}>
                                            Mobile App Development
                                        </NavLink>
                                        <i className="ri-arrow-right-line"></i>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='ecommerce-development' onClick={closeMenu}>
                                            E-Commerce Development
                                        </NavLink>
                                        <i className="ri-arrow-right-line"></i>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='software-development' onClick={closeMenu}>
                                            Software Development
                                        </NavLink>
                                        <i className="ri-arrow-right-line"></i>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='wireframing-&-prototyping' onClick={closeMenu}>
                                            Wireframing & Prototyping
                                        </NavLink>
                                        <i className="ri-arrow-right-line"></i>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li id='dropdown'>
                            <a className="pointer parent" onClick={() => toggleDropdown('verticals')}>
                                <span>Verticals</span> <i className={`ri-arrow-drop-down-line  ${dropdownOpen.verticals ? 'rotate' : ''}`}></i>
                            </a>
                            <div className={`dropdown-content-wrapper ${dropdownOpen.verticals ? 'show' : ''}`}>
                                <ul className='fdc' id='dropdown-content' type='none'>
                                    <li className='faic'>
                                        <NavLink to='healthcare' onClick={closeMenu}>
                                            Healthcare
                                        </NavLink>
                                        <i className="ri-arrow-right-line"></i>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='consumer' onClick={closeMenu}>
                                            Consumer
                                        </NavLink>
                                        <i className="ri-arrow-right-line"></i>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='travel-&-tourism' onClick={closeMenu}>
                                            Travel & Tourism
                                        </NavLink>
                                        <i className="ri-arrow-right-line"></i>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='education' onClick={closeMenu}>
                                            Education
                                        </NavLink>
                                        <i className="ri-arrow-right-line"></i>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='food-&-restaurant' onClick={closeMenu}>
                                            Food & Restaurant
                                        </NavLink>
                                        <i className="ri-arrow-right-line"></i>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='warehouse' onClick={closeMenu}>
                                            Warehouse
                                        </NavLink>
                                        <i className="ri-arrow-right-line"></i>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='real-estate' onClick={closeMenu}>
                                            Real Estate
                                        </NavLink>
                                        <i className="ri-arrow-right-line"></i>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='banking-&-finance' onClick={closeMenu}>
                                            Banking & Finance
                                        </NavLink>
                                        <i className="ri-arrow-right-line"></i>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='energy-&-utility' onClick={closeMenu}>
                                            Energy & Utility
                                        </NavLink>
                                        <i className="ri-arrow-right-line"></i>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='ecommerce' onClick={closeMenu}>
                                            E-Commerce
                                        </NavLink>
                                        <i className="ri-arrow-right-line"></i>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='manufacturing' onClick={closeMenu}>
                                            Manufacturing
                                        </NavLink>
                                        <i className="ri-arrow-right-line"></i>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li id='dropdown'>
                            <a className='pointer parent' onClick={() => toggleDropdown('technologies')}>
                                <span>Technologies</span> <i className={`ri-arrow-drop-down-line  ${dropdownOpen.technologies ? 'rotate' : ''}`}></i>
                            </a>
                            <div className={`dropdown-content-wrapper ${dropdownOpen.technologies ? 'show' : ''}`}>
                                <ul className='fdc' id="dropdown-content" type='none'>
                                    <li className='faic'>
                                        <NavLink to='open-source' onClick={closeMenu}>
                                            Open Source
                                        </NavLink>
                                        <i className="ri-arrow-right-line"></i>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='enterprise' onClick={closeMenu}>
                                            Enterprise
                                        </NavLink>
                                        <i className="ri-arrow-right-line"></i>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='ruby-on-rails' onClick={closeMenu}>
                                            Ruby On Rails
                                        </NavLink>
                                        <i className="ri-arrow-right-line"></i>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='/iot' onClick={closeMenu}>
                                            Internet of Things (IoT)
                                        </NavLink>
                                        <i className="ri-arrow-right-line"></i>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='/blockchain' onClick={closeMenu}>
                                            Blockchain
                                        </NavLink>
                                        <i className="ri-arrow-right-line"></i>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='cloud-computing' onClick={closeMenu}>
                                            Cloud Computing
                                        </NavLink>
                                        <i className="ri-arrow-right-line"></i>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <NavLink to='career' className='parent' onClick={closeMenu}>
                                Career
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='contact-us' className='parent' onClick={closeMenu}>
                                Contact us
                            </NavLink>
                        </li>
                    </ul>
                </section>
            </section>
            <div id='back-screen' className={isActive ? 'active' : ''} title='Click Anywhere To Close Sidebar' onClick={closeMenu}>
            </div>
        </div>
    );
}

export default SideMenu;
