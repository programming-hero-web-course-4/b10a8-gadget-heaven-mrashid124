import React, { useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { addToCart, addToWishlist } from '../Utilities/addingToCart';
import ReactStarsRating from 'react-awesome-stars-rating';
import { IoCartOutline } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import TitleOfPage from './TitleOfPage';

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
            <TitleOfPage title="Gadget Heaven | Dashboard"></TitleOfPage>
            <div className='bg-purple-600 h-[20rem] rounded-xl flex flex-col items-center pt-10 pb-32 space-y-5'>
                <h1 className='text-3xl font-semibold text-gray-50 text-center tracking-wide pt-5 pb-2'>Product Details</h1>
                <p className='text-sm text-gray-200 w-[500px] text-center py-2'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <div className="-mt-24 hero w-3/4 border-2 border-gray-200 w-[1010px] p-5 mx-auto rounded-xl bg-gray-50 grid grid-cols-5">
                <div className="hero-content flex-col col-span-2">
                    <img
                        src={product_image}
                        className="w-full h-[450px]  rounded-lg shadow-2xl" />

                    <div className='col-span-3 px-5 space-y-1'>
                        <h1 className="text-3xl font-bold">{product_title}</h1>
                        <p className="font-bold text-xl text-gray-600 ">Price: ${price}</p>
                        {availability ? <button className="btn btn-sm font-medium text-green-600 bg-green-100 my-3 rounded-3xl border-2 border-green-600">In Stock</button> : <button className="btn btn-sm bg-green-300 rounded-3xl">Out of Stock</button>}
                        <p className="">{description}</p>
                        <p className="font-bold">Specifications:</p>
                        <div>
                            {
                                Specification.map(item => <li>{item}</li>)
                            }
                        </div>
                        <p className="font-bold">Rating: {rating}</p>
                        <ReactStarsRating
                            // className='inline'
                            count={5}
                            onChange={() => ratingUpdated(rating)}
                            size={30}
                            activeColor="#ffd700"
                        />
                        <button onClick={() => {
                            handleAddToCart(product);
                            handleCart();
                        }
                        } className="btn btn-primary">Add to Cart<IoCartOutline></IoCartOutline> </button>
                        {
                            wishListBtn ? <button className="ml-3 btn btn-primary" disabled>Add to Wishlist <CiHeart></CiHeart></button> : <button onClick={() => handleAddToWishlist(product_id)} className="ml-3 btn btn-primary">Add to Wishlist <CiHeart></CiHeart></button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
