import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import TestimonialList from "@/components/Testimonial/TestimonialList";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

const Testimonial = () => {
    return (
        <>
            <Navbar/>
            <div className="bg-[#F8F9FC] pt-[120px] pb-6">
                <Breadcrumb title="Testimonial List"/>
            </div>

            <TestimonialList/>
            <Subscribe/>
            <Footer/>
        </>
    );
};

export default Testimonial;