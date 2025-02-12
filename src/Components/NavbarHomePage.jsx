import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
// import { CiHeart } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import banner from "../assets/banner.jpg"
import TitleOfPage from './TitleOfPage';
import { Helmet } from 'react-helmet';

const NavbarHomePage = ({ cartItemsTotal, wishItemsTotal}) => {
    const navigate = useNavigate();

    const handleShopBtn = () => {
        navigate("/dashboard");
    }

    const handleCartBtn = () => {
        navigate("/dashboard");
    }

    const pageLinks =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/statistics'>Statistics</NavLink></li>
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
        </>

    return (
        <div>
            <Helmet>
            <TitleOfPage title="Gadget Heaven | Home"></TitleOfPage>
            </Helmet>
            <div className='bg-purple-800 rounded-3xl mt-6'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {
                                    pageLinks

                                }
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl text-white">Gadget Heaven</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-white">
                            {
                                pageLinks
                            }
                        </ul>
                    </div>


                    <div className="ml-5 flex-none">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 bg-white rounded-full p-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="badge badge-sm indicator-item">{cartItemsTotal.length}</span>
                                </div>
                            </div>
                            <div
                                tabIndex={0}
                                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                <div className="card-body">
                                    <span className="text-lg font-bold">{cartItemsTotal.length} Items</span>
                                    <div className="card-actions">
                                        <button onClick={handleCartBtn} className="btn btn-primary btn-block rounded-2xl">View Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="indicator">
                    <IoMdHeartEmpty />

                        <span className="badge badge-sm indicator-item">{wishItemsTotal.length}</span>
                    </div>
                </div>

                <div className='pt-10 pb-32 space-y-5'>
                    <h1 className='w-1/2 mx-auto text-3xl text-white font-extrabold text-center'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className='w-1/2 mx-auto text-white text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <div className='flex justify-center'>
                        <button onClick={handleShopBtn} className='btn btn-sm rounded-4xl text-center p-2 text-6xl text-purple-500 border-b-purple-600 font-extrabold bg-gray-300 hover:bg-purple-800  hover:text-white'>Shop Now</button>
                    </div>
                </div>
            </div>

            <div className='-mt-28 mb-12'>
                <img className='w-1/2 mx-auto rounded-2xl border-double border-4 border-white' src={banner} alt="" />
            </div>

        </div>
    );
};

export default NavbarHomePage;

