import WorkListItem from "@/components/WorkList/WorkListItem";
import StateList from "@/components/WorkList/StateList";

async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/WorkList");
    if(!res.ok){
        throw new Error("WorkList2.jsx List Calling Fail");
    }
    return res.json();
}

const WorkList = async () => {

    const data = await getData();



    return (
        <>
            <div className="px-20 pb-16">
                <div className="py-16 w-2/6">
                    <p className="text-[#20B15A] text-xl uppercase font-medium mb-4">Work List</p>
                    <h1 className="font-semibold text-3xl">
                        We provide the Perfect Solution to your business growth
                    </h1>
                </div>

                <div className="grid grid-cols-3 gap-60 justify-center px-6">
                    {
                        data.map((item, i)=>{
                            return(
                                <WorkListItem key={i.toString()} item={item}/>
                            )
                        })
                    }
                </div>

                <StateList/>


            </div>
        </>
    );
};

export default WorkList;