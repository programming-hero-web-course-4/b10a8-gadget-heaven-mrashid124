import React from 'react';
import NavbarHomePage from '../NavbarHomePage';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <NavbarHomePage></NavbarHomePage>
            {/* Dynamic section */}

            <div className=' container w-11/12 mx-auto px-10'>
                <Outlet></Outlet>

            </div>

            {/* Footer section  */}

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;