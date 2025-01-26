import React from 'react';
import { Link } from 'react-router-dom';

const SingleGadget = (gadget) => {
    const { product_id, product_image, product_title, price } = gadget;
    return (
        <div className="card bg-base-100 w-50 shadow-xl">
            <figure className="px-12 pt-6">
                <img
                    src={product_image}
                    alt="Gadgets"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: ${price}</p>
                <div className="card-actions">
                    <Link to={`/gadget/${product_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleGadget;