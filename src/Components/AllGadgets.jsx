import React, { useEffect, useState } from 'react';
import SingleGadget from './SingleGadget';

const AllGadgets = () => {
    const [allGadgets, setAllGadget] = useState([]);
    const [products, setProducts] = useState([]);
    const [btn, setBtn] = useState("");

    useEffect(() => {
        fetch('/public/dataOfGadgets.json')
            .then(res => res.json())
            .then(data => setAllGadget(data))
    }, []);

    useEffect(() => {
        fetch('/public/dataOfGadgets.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const laptops = products.filter(laptop => laptop.category === "Laptop");
    const phones = products.filter(phone => phone.category === "Phone");
    const earPods = products.filter(earPod => earPod.category === "EarPod");
    const accessories = products.filter(accessories => accessories.category === "Accessories");

    const handleBtn = (button) => {
        setBtn(button);
    
        if (btn === "" || btn === "Products") {
            setAllGadget(products);
        }    
        if (btn === "Laptop") {
            setAllGadget(laptops);
        }    
        if (btn === "Phone") {
            setAllGadget(phones);
        }    
        if (btn === "Earbuds") {
            setAllGadget(earPods);
        }    
        if (btn === "Accessories") {
            setAllGadget(accessories);
        }
    }


    console.log(allGadgets);



    return (
        <div className='space-y-6'>
            <h1 className='text-3xl font-bold text-center'>Explore Cutting-Edge Gadgets</h1>
            <div className='flex justify-center gap-8'>
                <div className='flex flex-col gap-6 mt-6'>
                    <button onClick={() => handleBtn("Products")} className="btn btn-sm rounded-4xl text-center p-2 text-4xl text-black font-bold bg-gray-300  hover:bg-purple-800  hover:text-white">All Products</button>
                    <button onClick={() => handleBtn("Laptop")} className="btn btn-sm rounded-4xl text-center p-2 text-4xl text-black font-bold bg-gray-300 hover:bg-purple-800  hover:text-white">Laptop</button>
                    <button onClick={() => handleBtn("Phone")} className="btn btn-sm rounded-4xl text-center p-2 text-4xl text-black font-bold bg-gray-300 hover:bg-purple-800  hover:text-white">Phone</button>
                    <button onClick={() => handleBtn("Earbuds")} className="btn btn-sm rounded-4xl text-center p-2 text-4xl text-black font-bold bg-gray-300 hover:bg-purple-800  hover:text-white">Earbuds</button>
                    <button onClick={() => handleBtn("Accessories")} className="btn btn-sm rounded-4xl text-center p-2 text-4xl text-black font-bold bg-gray-300 hover:bg-purple-800  hover:text-white">Accessories</button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                    {
                        allGadgets.length == 0 ? <div className='flex justify-center items-center'><h1 className='text-3xl font-bold'>Item not available.</h1></div> : allGadgets.map(product => <SingleGadget key={product.product_id} product={product}></SingleGadget>)
                    }
                </div>


            </div>
        </div>
    );
};

export default AllGadgets;
