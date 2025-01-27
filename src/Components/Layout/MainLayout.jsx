import React from 'react';
import NavbarHomePage from '../NavbarHomePage';
import Footer from '../Footer/Footer';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';

const MainLayout = () => {
    const navigation = useNavigation();
    const location = useLocation();

    // let cartTotalItems = getStoredCartList();
    // let wishTotalItems = getStoredWishList();


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