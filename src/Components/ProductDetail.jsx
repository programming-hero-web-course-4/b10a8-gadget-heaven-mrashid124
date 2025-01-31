import React, { useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { addToCart, addToWishlist } from '../Utilities/addingToCart';
import ReactStarsRating from 'react-awesome-stars-rating';
import { MdAddShoppingCart } from "react-icons/md";

import { CiHeart } from 'react-icons/ci';
import TitleOfPage from './TitleOfPage';
import { Helmet } from 'react-helmet';

const ProductDetail = () => {
    const { productId } = useParams();
    const data = useLoaderData();
    const [wishListBtn, setWishListBtn] = useState(false);

    const product = data.find(product => product.product_id === productId);
    const { product_id, product_title, product_image, price, description, Specification, availability, rating } = product;

    const navigate = useNavigate();
    const handleCart = () => {
        navigate(`/product/${product_id}`);
    }
    const handleAddToCart = (id) => {
        addToCart(id);
    }
    const handleAddToWishlist = (id) => {
        addToWishlist(id);
        setWishListBtn(true);
    }
    const ratingUpdated = (newRating) => {
        console.log(newRating);
    };
    return (
        <div>
            <Helmet>
            <TitleOfPage title="Gadget Heaven | Home"></TitleOfPage>
            </Helmet>
            <div className='bg-purple-600 h-[20rem] rounded-xl flex flex-col items-center pt-10 pb-32 space-y-5'>
                <h1 className='text-3xl font-semibold text-gray-50 text-center tracking-wide pt-5 pb-2'>Product Details</h1>
                <p className='text-sm text-gray-200  text-center py-2'>Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='lg:relative flex justify-center'>
            <div className="-mt-24 hero text-black border-2 border-gray-200 w-[900px] p-2 mx-auto rounded-xl bg-gray-200 grid grid-cols-5">
                <div className="hero-content flex-col col-span-2">
                    <img
                        src={product_image}
                        className="w-[650px] h-[450px]  rounded-lg shadow-2xl" />

                    <div className='col-span-3 px-5 space-y-1'>
                        <h1 className="text-4xl font-bold">{product_title}</h1>
                        <p className="font-bold text-xl text-gray-600 ">Price: ${price}</p>
                        {availability ? <button className="btn btn-sm font-medium text-green-600 bg-green-100 my-3 rounded-3xl border-2 border-green-600">In Stock</button> : <button className="btn btn-sm bg-green-300 rounded-3xl">Out of Stock</button>}
                        <p className="">{description}</p>
                        <p className="font-bold">Specifications:</p>
                        <div>
                            {
                                Specification.map(item => <li>{item}</li>)
                            }
                        </div>
                        <p className="font-bold mt-4">Rating: {rating}</p>
                        <ReactStarsRating
                            className='flex g-3 mb-16'
                            count={5}
                            onChange={() => ratingUpdated({rating})}
                            size={30}
                            activeColor="#ffd700"
                        />
                        <button onClick={() => {
                            handleAddToCart(product_id);
                            handleCart();
                        }
                        } className="btn btn-sm rounded-4xl text-center p-2 text-4xl text-purple-500 border-b-purple-600 font-bold bg-gray-300 hover:bg-purple-800  hover:text-white">Add to Cart<MdAddShoppingCart /> </button>
                        {
                            wishListBtn ? <button className="ml-3 btn btn-primary" disabled>Add to Wishlist <CiHeart></CiHeart></button> : <button onClick={() => handleAddToWishlist(product_id)} className="ml-6 btn btn-sm rounded-4xl text-center p-2 text-4xl text-purple-500 border-b-purple-600 font-bold bg-gray-300 hover:bg-purple-800  hover:text-white">Add to Wishlist <CiHeart></CiHeart></button>
                        }
                    </div>
                </div>
            </div>


            </div>
        </div>
    );
};

export default ProductDetail;
