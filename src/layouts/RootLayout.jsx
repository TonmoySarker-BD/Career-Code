import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../pages/Shared/NavBar';
import Footer from '../pages/Shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <main className=''>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;