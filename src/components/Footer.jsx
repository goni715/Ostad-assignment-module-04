import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import React from "react";

const Footer = () => {
    return (
        <>
            <div className="px-20 py-20 bg-black">
                <div className="grid grid-cols-3 gap-52">
                    <div>
                        <h1 className="text-4xl font-bold text-white cursor-pointer">
                            WEB LOGO
                        </h1>
                        <p className="text-xl text-white pt-9 pb-2">
                            Some footer text about the  Agency. Just a little description to help people understand you better
                        </p>
                        <div className="text-white py-5 flex gap-6">
                            <a className="cursor-pointer" target="_blank" href={`//www.facebook.com`}>
                                <FaFacebookF className="bg-[#20B15A] w-[40px] h-[40px] p-2.5 rounded-full cursor-pointer" size={25}/>
                            </a>
                            <a className="cursor-pointer" target="_blank" href={`//www.twitter.com`}>
                                <FaTwitter className="bg-[#20B15A] w-[40px] h-[40px] p-2.5 rounded-full cursor-pointer" size={25}/>
                            </a>
                            <a className="cursor-pointer" target="_blank" href={`//www.linkedin.com`}>
                                <FaLinkedinIn className="bg-[#20B15A] w-[40px] h-[40px] p-2.5 rounded-full cursor-pointer" size={25}/>
                            </a>
                            <a className="cursor-pointer" target="_blank" href={`//www.instagram.com`}>
                                <FaInstagram className="bg-[#20B15A] w-[40px] h-[40px] p-2.5 rounded-full cursor-pointer" size={25}/>
                            </a>




                        </div>
                    </div>
                    <div className="text-white flex flex-col gap-8">
                        <h1 className="text-xl font-semibold">Quick Links</h1>
                        <h3 className="text-lg font-medium cursor-pointer">Services</h3>
                        <h3 className="text-lg font-medium cursor-pointer">Portfolio</h3>
                        <h3 className="text-lg font-medium cursor-pointer">About Us </h3>
                        <h3 className="text-lg font-medium cursor-pointer">Contact Us</h3>
                    </div>
                    <div className="text-white flex flex-col gap-8">
                        <h1 className="text-xl font-semibold">Address</h1>
                        <h3 className="text-lg font-medium">
                            Design Agency Head Office. <br/>
                            Airport Road <br/>
                            United Arab Emirate
                        </h3>
                    </div>
                </div>

                <p className="text-xl text-white font-medium mt-16">
                    Copyright Design Agency 2023
                </p>
            </div>
        </>
    );
};

export default Footer;