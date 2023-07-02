import React from 'react';
import Header from './Header';
import Portfolio from './Portfolio';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <div className=''>
            <Header/>
            <Portfolio/>
            <About/>
            <Skills/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;