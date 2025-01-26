import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-100 mt-20 ">
        <h1 className="text-4xl font-semibold text-center pt-10 pb-2">
          Gadget Heaven
        </h1>
        <p className="text-gray-600 text-center">
          Leading the way in cutting-edge technology and innovation.
        </p>
  
        <hr className="w-[75%] h-[2px] bg-gray-600 mx-auto my-8" />
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  w-[50rem] mx-auto pb-16">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Services</h2>
            <p className="text-gray-600">Product Support</p>
            <p className="text-gray-600  my-1">Order Tracking</p>
            <p className="text-gray-600 my-1">Shipping & Delivery</p>
            <p className="text-gray-600">Returns</p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Company</h2>
            <p className="text-gray-600">About Us</p>
            <p className="text-gray-600 my-1">Careers</p>
            <p className="text-gray-600">Contact</p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Legal </h2>
            <p className="text-gray-600">Terms of Service</p>
            <p className="text-gray-600 my-1">Privacy Policy</p>
            <p className="text-gray-600">Cookie Policy</p>
          </div>
        </div>
      </div>
    );
};

export default Footer;