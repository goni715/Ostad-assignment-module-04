import Navbar from "@/components/Navbar";
import React from "react";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import WorkList from "@/components/WorkList/WorkList";
import FeaturedProject from "@/components/FeaturedProject/FeaturedProject";
import Hero from "@/components/Hero";

const Home = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <WorkList/>
            <FeaturedProject/>
            <Subscribe/>
            <Footer/>


        </>
    );
};

export default Home;