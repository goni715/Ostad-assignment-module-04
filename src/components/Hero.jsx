import Image from "next/image";

async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/HeroList");
    if(!res.ok){
        throw new Error("HeroList Calling Fail");
    }
    return res.json();
}

const Hero = async () => {
    const data = await getData();
    const {title, description, image1, image2, image3, image4} = data || {};



    return (
        <>
            <div className="main-div pt-[120px] pb-6">
                <div className="head-body flex justify-between items-center py-16 px-20">
                    <div className="left-part w-2/5">
                        <h1 className="font-bold text-[50px] leading-[65px]">
                            {title}
                        </h1>
                        <p className="text-xl font-medium py-4 mb-4">
                            {description}
                        </p>
                        <button className="bg-[#20B15A] px-6 py-4 text-xl font-medium text-white rounded-xl"> Get Started</button>
                    </div>

                    <div className="right-part w-1/2 flex flex-col gap-3">
                        <div className="flex gap-2.5 w-full h-1/2">
                            <Image width={500} height={500} className="w-3/5 h-[270px] rounded-xl" src={image1} placeholder="blur" blurDataURL={process.env.PLACEHOLDER_IMAGE} alt="hero1"/>
                            <Image width={500} height={500} className="w-2/5 h-[270px] rounded-xl" src={image2} placeholder="blur" blurDataURL={process.env.PLACEHOLDER_IMAGE} alt="hero2"/>
                        </div>
                        <div className="flex gap-2.5 w-full h-1/2">
                            <Image width={500} height={500} className="w-2/5 h-[200px] rounded-xl" src={image3} placeholder="blur" blurDataURL={process.env.PLACEHOLDER_IMAGE} alt="hero3"/>
                            <Image width={500} height={500} className="w-3/5 h-[200px] rounded-xl" src={image4} placeholder="blur" blurDataURL={process.env.PLACEHOLDER_IMAGE} alt="hero4"/>
                        </div>
                    </div>
                </div>


                {/**/}

                <div className="flex bg-white py-10 items-center justify-around">
                    <img src="google.svg" alt=""/>
                    <img src="Trello.png" alt=""/>
                    <img src="monday.svg" alt=""/>
                    <img src="Notion.png" alt=""/>
                    <img src="Slack.png" alt=""/>
                </div>
                {/**/}

            </div>

        </>
    );
};

export default Hero;
