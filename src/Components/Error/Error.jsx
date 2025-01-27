import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorPage from '../../assets/error404.jpg'
import { Helmet } from 'react-helmet';
const Error = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    }
    return (
        <div>
            <Helmet>
                <title>Error Page</title>
            </Helmet>
            <div className="flex justify-center items-center h-[500px] w-full">
                <h1 className="text-3xl">Page Not found.</h1>
                <img className='w-96' src={errorPage} alt="404" />
            </div>
            <div className="flex justify-center items-center h-[100px] w-full">
                <button className='text-2xl hover:underline px-6 py-6 shadow rounded-lg border' onClick={back}>Go Back</button>
            </div>
        </div>
    );
};

export default Error;