import React from 'react';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const WishingGadgets = ({ wishProducts, setWishProducts }) => {
    const handleDelete = (id) => {
        const remaining = wishProducts.filter(i => i.product_id !== id);
        setWishProducts(remaining);
        toast("Item has been Removed");
    }
    return (
        <div className='p-6'>
            <div className='space-y-4'>
                {
                    wishProducts.map(gadget => <div key={gadget.product_id} className='flex gap-6 items-center'>
                        <div>
                            <img className='w-[150px] h-[150px] rounded-full' src={gadget.product_image} alt="" />
                        </div>
                        <div>
                            <div>
                                <h4 className='text-xl font-bold'>{gadget.product_title}</h4>
                                <p>{gadget.description}</p>
                                <p className="text-sm font-bold">Price: ${gadget.price}</p>
                            </div>
                            <div>
                                <MdDelete onClick={() => handleDelete(gadget.product_id)} className="w-[30px] h-[30px]"></MdDelete>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default WishingGadgets;