import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import TeamList from "@/components/Team/TeamList";
const TeamPage = () => {
    return (
        <>
            <Navbar/>
            <div className="bg-[#F8F9FC] pt-[120px] pb-6">
                <Breadcrumb title="TeamList"/>
            </div>
            <TeamList/>
            <Subscribe/>
            <Footer/>

        </>
    );
};

export default TeamPage;