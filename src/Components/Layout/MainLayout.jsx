import React from 'react';
import NavbarHomePage from '../NavbarHomePage';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <NavbarHomePage></NavbarHomePage>
            {/* Dynamic section */}
            {/* Footer section  */}

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;