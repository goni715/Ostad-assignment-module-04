import TestimonialItem from "@/components/Testimonial/TestimonialItem";
import ProjectItem from "@/components/AllProject/ProjectItem";

async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/AllProject");
    if(!res.ok){
        throw new Error("AllProject Calling Fail");
    }
    return res.json();
}


const AllProject = async () => {
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
                                <ProjectItem key={i.toString()} item={item}/>
                            )
                        })
                    }
                </div>

            </div>
        </>
    );
};

export default AllProject;