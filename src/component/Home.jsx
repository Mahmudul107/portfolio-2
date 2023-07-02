import React from 'react';
import Header from './Header';
import Portfolio from './Portfolio';
import About from './About';

const Home = () => {
    return (
        <div className='mx-[20px]'>
            <Header/>
            <Portfolio/>
            <About/>
        </div>
    );
};

export default Home;