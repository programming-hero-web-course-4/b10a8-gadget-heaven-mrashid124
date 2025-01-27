import React from 'react';
import { Helmet } from 'react-helmet';
const TitleOfPage = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
        </div>
    );
};

export default TitleOfPage;