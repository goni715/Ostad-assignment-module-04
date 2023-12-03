import TeamListItem from "@/components/Team/TeamListItem";

async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/TeamList");
    if(!res.ok){
        throw new Error("TeamList Calling Fail");
    }
    return res.json();
}

const TeamList = async () => {
    const data = await getData();

    return (
        <>
            <div className="px-20 pb-16">
                <div className="py-16 w-2/6">
                    <p className="text-[#20B15A] text-xl uppercase font-medium mb-4">Our Team Member</p>
                    <h1 className="font-semibold text-3xl">
                        Check our awesome team members
                    </h1>
                </div>

                <div className="grid grid-cols-3 justify-center gap-10">
                    {
                        data.map((item, i)=>{
                            return(
                                <TeamListItem key={i.toString()} item={item}/>
                            )
                        })
                    }
                </div>

            </div>
        </>
    );
};

export default TeamList;