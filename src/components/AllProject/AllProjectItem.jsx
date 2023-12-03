import Image from "next/image";

const AllProjectItem = ({item}) => {
    const {title, image} = item || {}
    return (
        <>

            <div className="all-project py-6 rounded-2xl">
                <Image className="w-11/12 h-auto mx-auto object-fill rounded-2xl" src={image} width={500} height={500} alt="pic"/>
                <h1 className="uppercase font-semibold text-2xl pt-6 pl-[28px]">
                    {title}
                </h1>
            </div>


        </>
    );
};

export default AllProjectItem;