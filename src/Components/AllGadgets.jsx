import React, { useEffect, useState } from 'react';

const AllGadgets = () => {
    const [allGadgets, setAllGadget] = useState([]);

    useEffect( ()=> {
        fetch('/public/dataOfGadgets.json')
        .then(res =>res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default AllGadgets;