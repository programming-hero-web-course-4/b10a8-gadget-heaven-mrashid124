import React from 'react';
import { Helmet } from 'react-helmet';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import TitleOfPage from './TitleOfPage';

const Login = () => {
    return (
        <div className='bg-gray-800'>
            <Helmet>
             <TitleOfPage title="Gadget Heaven | Login"></TitleOfPage>
             </Helmet>
             <div>
            <div className='p-4 space-y-2 mb-2'>
                <h2 className='text-3xl  text-purple-600'>Login With</h2>
                    <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle> Google
                   </button>
                    <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>Github
                   </button>
            </div>
            <div className='p-4 space-y-2 mb-4'>
                <h2 className='text-3xl text-blue-700'>Find us</h2>
                   <a className='p-4 flex text-lg items-center border rounded-t-xl' href="">
                        <FaFacebook className='mr-3'></FaFacebook>
                        <span>Facebook</span>
                   </a>
                   <a className='p-4 flex text-lg items-center border rounded-t-xl' href="">
                      <FaTwitter className='me=r-3'></FaTwitter>
                        <span>Twitter</span>
                   </a>
            </div>
        </div>
            {/* <h2>Login</h2> */}
        </div>
    );
};

export default Login;