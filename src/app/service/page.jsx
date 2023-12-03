import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import React from "react";
import Subscribe from "@/components/Subscribe";
import AllService from "@/components/Service/AllService";
import Footer from "@/components/Footer";

const Service = () => {
    return (
        <>
            <Navbar/>

            <div className="bg-[#F8F9FC] pt-[120px] pb-6">
                <Breadcrumb title="Our AllService"/>
            </div>

            <AllService/>
            <Subscribe/>
            <Footer/>
        </>
    );
};

export default Service;