import {FaArrowRight} from "react-icons/fa";
import Image from "next/image";

const WorkListItem = ({item}) => {
    const {title, des, } = item || {};

    return (
        <>
            <div className="">
                <div className="bg-[#D7F5DC] flex w-[80px] h-[80px] justify-center items-center rounded-2xl ">
                    <Image src="Activity.svg" className="w-[34px] h-[34px]" width={500} height={500}  alt="work"/>
                </div>
                <h1 className="text-2xl font-semibold my-4">
                    {title}
                </h1>
                <p>
                    {des}
                </p>
                <div className="flex pl-5 items-center text-[18px] gap-3 cursor-pointer py-7">
                    Learn More <FaArrowRight size={18} />
                </div>
            </div>
        </>
    );
};

export default WorkListItem;