import TestimonialItem from "@/components/Testimonial/TestimonialItem";

async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/TestimonialList");
    if(!res.ok){
        throw new Error("Testimonial List Calling Fail");
    }
    return res.json();
}







const TestimonialList = async () => {

    const data = await getData();



    return (
        <>
            <div className="px-20 pb-16">
                <div className="py-16 w-2/6">
                    <p className="text-[#20B15A] text-xl uppercase font-medium mb-4">Testimonial List</p>
                    <h1 className="font-semibold text-3xl">
                        Better Agency/SEO Solution At Your Fingertips
                    </h1>
                </div>

                <div className="grid grid-cols-3 gap-8">
                    {
                        data.map((item, i)=>{
                            return(
                                <TestimonialItem key={i.toString()} item={item}/>
                            )
                        })
                    }

                </div>

            </div>
        </>
    );
};

export default TestimonialList;