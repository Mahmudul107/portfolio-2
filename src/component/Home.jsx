import React from 'react';
import Header from './Header';
import Portfolio from './Portfolio';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import Project from './Project';

const Home = () => {
    return (
        <div id='#'>
            <Header/>
            <Portfolio/>
            <About/>
            <Skills/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;