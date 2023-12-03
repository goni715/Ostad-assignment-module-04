import FeaturedProjectItem from "@/components/FeaturedProject/FeaturedProjectItem";
import moment from 'moment';
async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/FeaturedProject");
    if(!res.ok){
        throw new Error("FeaturedProject Calling Fail");
    }
    return res.json();
}
const FeaturedProject = async () => {
    const data = await getData();

    return (
        <>
            <div className="px-20 py-16 bg-[#F0FDF4]">
                <div className="w-2/6">
                    <p className="text-[#20B15A] text-xl uppercase font-medium mb-4">Featured Project</p>
                    <h1 className="font-semibold text-3xl">
                        We provide the Perfect Solution to your business growth
                    </h1>
                </div>

                <div className="grid grid-cols-2 gap-8 mt-12">
                    <div className="h-full">
                        <img className="w-full h-[86%] rounded-xl" src={data[0]['image']} alt=""/>
                        <p className="text-sm leading-6 text-[#2E3E5C] py-4">
                            App Design - {moment(data[0]['created_at']).format('LL')}
                        </p>
                        <h1 className="font-bold text-2xl text-[#2E3E5C] capitalize leading-[28px]">
                            {data[0]['title']}
                        </h1>
                    </div>

                    <div className="h-full grid grid-cols-2 gap-8">
                        {
                            data.map((item, i)=>{
                                if(i <4){
                                    return(
                                        <FeaturedProjectItem key={i.toString()} item={item}/>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeaturedProject;