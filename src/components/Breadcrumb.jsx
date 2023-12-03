import {IoIosArrowForward} from "react-icons/io";

const Breadcrumb = ({title}) => {
    return (
        <>
            <div className="px-20 py-10">
                <h1 className="text-4xl font-semibold text-[#101A29] leading-[51px] pb-4">{title}</h1>
                <p className="flex items-center gap-3">
                    <span className="text-[#101A29] leading-6 font-semibold"> Home</span>
                    <IoIosArrowForward size={16}/>
                    <span className="text-[#20B15A] font-semibold leading-6">{title}</span>
                </p>
            </div>
        </>
    );
};

export default Breadcrumb;