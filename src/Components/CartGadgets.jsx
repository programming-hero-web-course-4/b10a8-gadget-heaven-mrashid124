import React from 'react';
import groupImg from "../assets/Group.png"
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const CartGadgets = ({cartProducts, setCartProducts}) => {
 console.log(cartProducts);
    const handleDelete = (id) => {
        const remaining = cartProducts.filter(i => i.product_id !== id);
        setCartProducts(remaining);
        toast("Item has been Removed");
    }
    let num = 0;
    for (const obj of cartProducts) {
        num = num + obj.price;
    }
    const handleSort = () => {
        const sortedCartItems = [...cartProducts].sort((a, b) => b.price - a.price);
        setCartProducts(sortedCartItems);
    }
    const handlePurchase = () => {
        document.getElementById('my_modal_5').showModal();
        localStorage.removeItem('cart-list');
    }
    const navigate = useNavigate();
    const handleClose = () => {
        navigate("/");
    }

    return (
        <div>
            <div className='flex justify-between p-6'>
                <h1 className='font-bold'>Cart</h1>
                <h1 className='font-bold'>Total Price: ${num}</h1>

                <button onClick={handleSort} className="btn btn-sm">Sort by Price</button>

                {
                    cartProducts.length == 0 ? <button className="btn btn-sm" disabled>Purchase</button> : <button className="btn btn-sm" onClick={() => handlePurchase()}>Purchase</button>
                }

                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box text-center">
                        <div className='flex justify-center'>
                            <img className='w-[40px]' src={groupImg} alt="" />
                        </div>
                        <h3 className="font-bold text-3xl">Payment Successful</h3>
                        <p className="py-5">Thanks for the purchase</p>
                        <p className="py-5">Total: ${num}</p>
                        <div className='flex justify-center'>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button onClick={handleClose} className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>

            <div className='space-y-5'>
                {
                    cartProducts.map(product => <div key={product.product_id} className='flex gap-5 items-center'>
                        <div>
                            <img className=' w-[150px] h-[100px] rounded-xl' src={product.product_image} alt="" />
                        </div>
                        <div>
                            <div>
                                <h4 className='text-xl font-bold'>{product.product_title}</h4>
                                <p>{product.description}</p>
                                <p className="text-sm font-bold">Price: ${product.price}</p>
                            </div>
                            <div>
                                <MdDelete onClick={() => handleDelete(product.product_id)} className="w-[25px] h-[25px]"></MdDelete>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CartGadgets;
