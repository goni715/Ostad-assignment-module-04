import React from "react";
import ServiceItem from "@/components/Service/ServiceItem";
import ProjectItem from "@/components/AllProject/ProjectItem";
async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/AllService");
    if(!res.ok){
        throw new Error("AllService List Calling Fail");
    }
    return res.json();
}

const AllService = async () => {
    const data = await getData();


    return (
        <>
            <div className="px-20 pb-16">
                <div className="py-16 w-2/6">
                    <p className="text-[#20B15A] text-xl uppercase font-medium mb-4">Our All Services</p>
                    <h1 className="font-semibold text-3xl">
                        We Provide BestWeb design services
                    </h1>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    {
                        data.map((item, i)=>{
                            return(
                                <ServiceItem key={i.toString()} item={item}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default AllService;