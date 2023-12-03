import React from "react";
import Image from "next/image";

const ServiceItem = ({item}) => {
    const {tag, title, des, image1, image2, image3, image4} = item || {};

    return (
        <>
            <div className="service rounded-2xl pt-8 pb-8 flex flex-col items-center justify-center">
                <div className="flex flex-col px-7 justify-center">
                    <h1 className="uppercase text-left text-xl font-semibold">
                        {title}
                    </h1>
                    <p className="capitalize text-[#9D9D9D] mt-4 mb-8">
                        {des}
                    </p>
                </div>

                <div className="flex flex-col px-7 gap-4">
                    <div className="flex gap-4 h-2/5">
                        <Image src={image1} className="w-3/4 h-auto rounded-lg" width={500} height={500} alt="service1"/>
                        <Image src={image2} className="w-1/4 h-auto rounded-lg" width={500} height={500} alt="service2"/>
                    </div>
                    <div className="flex gap-4 h-3/5">
                        <Image src={image3} className="w-1/2 h-auto rounded-lg" width={500} height={500} alt="service3"/>
                        <Image src={image4} className="w-1/2 h-auto rounded-lg" width={500} height={500} alt="service4"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceItem;