import Image from "next/image";

async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/StatList");
    if(!res.ok){
        throw new Error("StatList Calling Fail");
    }
    return res.json();
}


const StateList = async () => {
    const data = await getData();
    const {followers, solved, customers, projects} = data || {};


    return (
        <>
            <div className="grid grid-cols-4 mt-48 gap-12">
                <div className="states bg-white flex flex-col justify-center items-center py-16 rounded-xl">
                    <div className="bg-[#D7F5DC] w-[80px] h-[80px] flex justify-center items-center rounded-xl">
                        <Image className="w-[40px] h-[28px]" src="Group3.svg" width={500} height={500} alt="followers"/>
                    </div>
                    <h1 className="text-3xl font-semibold pt-4 pb-2">
                        {followers}
                    </h1>
                    <p className="font-medium">Followers</p>
                </div>
                <div className="states bg-white flex flex-col justify-center items-center py-16 rounded-xl">
                    <div className="bg-[#D7F5DC] w-[80px] h-[80px] flex justify-center items-center rounded-xl">
                        <Image className="w-[40px] h-[28px]" src="Like.svg" width={500} height={500} alt="solved"/>
                    </div>
                    <h1 className="text-3xl font-semibold pt-4 pb-2">
                        {solved}
                    </h1>
                    <p className="font-medium">Solved Problems</p>
                </div>
                <div className="states bg-white flex flex-col justify-center items-center py-16 rounded-xl">
                    <div className="bg-[#D7F5DC] w-[80px] h-[80px] flex justify-center items-center rounded-xl">
                        <Image className="w-[40px] h-[28px]" src="Happy1.svg" width={500} height={500} alt="customers"/>
                    </div>
                    <h1 className="text-3xl font-semibold pt-4 pb-2">
                        {customers}
                    </h1>
                    <p className="font-medium">Happy Customers</p>
                </div>
                <div className="states bg-white flex flex-col justify-center items-center py-16 rounded-xl">
                    <div className="bg-[#D7F5DC] w-[80px] h-[80px] flex justify-center items-center rounded-xl">
                        <Image className="w-[40px] h-[28px]" src="Scan3.svg" width={500} height={500} alt="projects"/>
                    </div>
                    <h1 className="text-3xl font-semibold pt-4 pb-2">
                        {projects}
                    </h1>
                    <p className="font-medium">Projects</p>
                </div>
            </div>
        </>
    );
};

export default StateList;