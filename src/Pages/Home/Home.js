import React from 'react';
import useTitle from '../../Hook/useTitle';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Hero from './Hero';

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Hero className="w-full h-screen"></Hero>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;