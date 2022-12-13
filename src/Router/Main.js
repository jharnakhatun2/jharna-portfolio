import React from 'react';
import { Outlet } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Footer from './Footer';
import Navigation from './Navigation';

const Main = () => {
    return (
        <div>
        <Navigation></Navigation>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Main;