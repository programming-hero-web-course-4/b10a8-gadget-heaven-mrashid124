import React from 'react';
import TitleOfPage from './TitleOfPage';
import { Helmet } from 'react-helmet';

const Statistics = () => {
    return (
        <div>
            <Helmet>
            <TitleOfPage title="Gadget Heaven | Statistics"></TitleOfPage>
            </Helmet>
            <h1 className='text-5xl text-center font-extrabold'> Statistics not available.</h1>
        </div>
    );
};

export default Statistics;