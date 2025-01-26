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
    const smartwatches = products.filter(smartwatch => smartwatch.category === "SmartWatch");

    console.log(allGadgets);



    return (
        <div className='space-y-6'>
            <h1 className='text-3xl font-bold text-center'>Explore Cutting-Edge Gadgets</h1>
            <div className='flex justify-center gap-5'>
                <div className='flex flex-col gap-5 mt-6'>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        {
                            allGadgets.length == 0 ? <div className='flex justify-center items-center'><h1 className='text-3xl font-bold'>There is No Item</h1></div> : allGadgets.map(gadget => <SingleGadget key={gadget.product_id} gadget={gadget}></SingleGadget>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllGadgets;