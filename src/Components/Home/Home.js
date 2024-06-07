import React from 'react';
import LandingContent from './SubComponents/LandingContent/LandingContent';
import CardsSection from './SubComponents/CardsSection/CardsSection';
import Reviews from './SubComponents/Reviews/Reviews';
import Footer from '../Footer/Footer';
import SideMenu from '../Navbar/SideMenu';
import BusinessOpportunities from './SubComponents/BusinessOpportunities/BusinessOpportunities.js'
import './Home.css'

const Home = () => {
    return (
        <>
            <SideMenu />
            <main>
                <img id='background' src='' alt='Background Image Not Found' />
                <div id='content' className='fdc faic'>
                    <LandingContent />
                    <CardsSection />
                    <hr style={{ width: "100%", filter: "brightness(1.3)" }} />
                    <Reviews />
                    <Footer />
                </div>
            </main>
        </>
    );
};

export default Home;