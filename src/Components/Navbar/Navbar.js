import React from 'react'
import '../littles.css';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div id='navbar-wrapper'>
            <header className='faic center1'>
                <nav className='faic'>
                    <section className='faic'>
                        <figure>
                            {/* <img src={require('./Skyra_Tech_logo.png')} alt='Logo' /> */}
                        </figure>
                    </section>
                    <section className='faic'>
                        <ul className='faic gap' type='none'>
                            <li>
                                <NavLink to='/'>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/about'>
                                    About
                                </NavLink>
                            </li>
                            <li id='dropdown'>
                                <a className='pointer'>Services <i class="ri-arrow-drop-down-line"></i></a>
                                <ul className='fdc' id="dropdown-content" type='none'>
                                    <li className='faic'>
                                        <NavLink to='web-development'>
                                            Web Development
                                        </NavLink>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='mobile-app-development'>
                                            Mobile App Development
                                        </NavLink>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='ecommerce-development'>
                                            E-Commerce Development
                                        </NavLink>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='software-development'>
                                            Software Development
                                        </NavLink>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='wireframing-&-prototyping'>
                                            Wireframing & Prototyping
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li id='dropdown'>
                                <a className="pointer">Verticals <i class="ri-arrow-drop-down-line"></i></a>
                                <ul className='fdc' id='dropdown-content' type='none'>
                                    <li className='faic'>
                                        <NavLink to='healthcare'>
                                            Healthcare
                                        </NavLink>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='consumer'>
                                            Consumer
                                        </NavLink>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='travel-&-tourism'>
                                            Travel & Tourism
                                        </NavLink>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='education'>
                                            Education
                                        </NavLink>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='food-&-restaurnt'>
                                            Food & Restaurant
                                        </NavLink>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='warehouse'>
                                            Warehouse
                                        </NavLink>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='real-estate'>
                                            Real Estate
                                        </NavLink>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='banking-&-finance'>
                                            Banking & Finance
                                        </NavLink>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='energy-&-utility'>
                                            Energy & Utility
                                        </NavLink>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='ecommerce'>
                                            E-Commerce
                                        </NavLink>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='manufacturing'>
                                            Manufacturing
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li id='dropdown'>
                                <a className='pointer'>Technologies <i class="ri-arrow-drop-down-line"></i></a>
                                <ul className='fdc' id="dropdown-content" type='none'>
                                    <li className='faic'>
                                        <NavLink to='open-source'>
                                            Open Source
                                        </NavLink>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='enterprise'>
                                            Enterprise
                                        </NavLink>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='ruby-on-rails'>
                                            Ruby On Rails
                                        </NavLink>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='/iot'>
                                            Internet of Things (IoT)
                                        </NavLink>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='wireframing-&-prototyping'>
                                            Blockchain
                                        </NavLink>
                                    </li>
                                    <li className='faic'>
                                        <NavLink to='wireframing-&-prototyping'>
                                            Cloud Computing
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to='career'>
                                    Career
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='contact-us'>
                                    Contact us
                                </NavLink>
                            </li>
                        </ul>
                    </section>
                    <section className='faic m-gap'>
                        <span class="menu-icon pointer material-symbols-outlined">
                            menu
                        </span>
                    </section>
                </nav>
            </header>
        </div>
    )
}

export default Navbar