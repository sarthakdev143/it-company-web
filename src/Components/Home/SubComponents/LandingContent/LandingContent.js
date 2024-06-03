import React from 'react';
import TypedText from '../TypedText';
import './LandingContent.css';

const LandingContent = () => (
    <section id='landing-content' className='fdc'>
        <div id='part-1' className='faic'>
            <aside className='flex'>
                <h1>Innovative Solutions for Your Business Success</h1>
                <p>Skyra Tech Solutions Pvt Ltd specializes in delivering top-notch web and mobile app development services with a focus on innovation, quality, and customer satisfaction.</p>
                <p></p>
            </aside>
            <figure>
                <img style={{ transform: "scaleX(-1)" }} src={`${process.env.PUBLIC_URL}/imgs/man.png`} alt='Image of A Man Doing Coding' />
            </figure>
        </div>
        <div id='part-2' className='faic'>
            <h1>looking for <TypedText strings={['REMOTE HANDS', 'IT CONSULTANCY', 'CLOUD SUPPORT', 'E-COMMERCE', 'WEB DEVELOPMENT']} /> CONSULTING?</h1>
            <button>contact us today</button>
        </div>
    </section>
);

export default LandingContent;
