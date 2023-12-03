import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import React from "react";
import AllProject from "@/components/AllProject/AllProject";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
    return (
        <>
            <Navbar/>
            <div className="bg-[#F8F9FC] pt-[120px] pb-6">
                <Breadcrumb title="All Project"/>
            </div>

            <AllProject/>
            <Subscribe/>
            <Footer/>
        </>
    );
};

export default ProjectsPage;