import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getToCart, getToWishlist } from '../Utilities/addingToCart';
import CartGadgets from './CartGadgets';
import WishingGadgets from './WishingGadgets';
import TitleOfPage from './TitleOfPage';

const Dashboard = () => {
    const allProducts = useLoaderData();
    const [cartProducts, setCartProducts] = useState([]);
    const [wishProducts, setWishProducts] = useState([]);

    useEffect(() => {
        const storedCartItems = getToCart();
        const cartItemList = allProducts.filter(product => storedCartItems.includes(product.product_id));
        setCartProducts(cartItemList);
    }, []);

    useEffect(() => {
        const storedWishItems = getToWishlist();
        const wishItemList = allProducts.filter(product => storedWishItems.includes(product.product_id));
        setWishProducts(wishItemList);
    }, []);


    const [isActive, setIsActive] = useState({
        cart: true,
        status: "cart"
    });
    const handleStatus = (status) => {
        if (status == "cart") {
            setIsActive({
                cart: true,
                status: "cart"
            })
        }
        else {
            setIsActive({
                cart: false,
                status: "wishlist"
            });


        }
    }

    return (
        <div>
             <TitleOfPage title="Gadget Heaven | Dashboard"></TitleOfPage>
            <div className='bg-purple-800 p-5 space-y-5'>
                <h1 className='text-center text-3xl text-white'>Dashboard</h1>
                <p className='text-center text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className='flex justify-center gap-4'>
                    <button onClick={() => handleStatus("cart")} className={`${isActive.cart ? "bg-purple-300 border-2 rounded-lg p-2" : "border-2 rounded-lg p-2 btn btn-sm"}`}>Cart</button>
                    <button onClick={() => handleStatus("wishlist")} className={`${isActive.cart ? "border-2 rounded-lg p-2 btn btn-sm" : "bg-purple-300 border-2 rounded-lg p-2"}`}>Wishlist</button>
                </div>
            </div>

            {
                isActive.cart ? <CartGadgets cartProducts={cartProducts} setCartProducts={setCartProducts}></CartGadgets> : <WishingGadgets wishProducts={wishProducts} setWishProducts={setWishProducts}></WishingGadgets>
            }


        </div>
    );
};

export default Dashboard;