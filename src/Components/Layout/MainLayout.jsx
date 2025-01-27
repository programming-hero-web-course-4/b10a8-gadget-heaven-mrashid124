import React from 'react';
import NavbarHomePage from '../NavbarHomePage';
import Footer from '../Footer/Footer';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Navbar from '../Navbar';
import { getToCart, getToWishlist } from '../../Utilities/addingToCart';

const MainLayout = () => {
    const navigation = useNavigation();
    const location = useLocation();

    let cartItemsTotal = getToCart();
    let wishItemsTotal = getToWishlist();


    return (
        <div>
            {/* Navbar */}
            {
                location.pathname == "/" ? <NavbarHomePage cartItemsTotal={cartItemsTotal} wishItemsTotal={wishItemsTotal}></NavbarHomePage> : <Navbar cartItemsTotal={cartItemsTotal} wishItemsTotal={wishItemsTotal}></Navbar>
            }
            {/* Dynamic section */}

            <div className=' container w-11/12 mx-auto px-10'>
                {
                    navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>
                }

            </div>

            {/* Footer section  */}

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;