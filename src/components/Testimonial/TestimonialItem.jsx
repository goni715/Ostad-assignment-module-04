
const TestimonialItem = ({item}) => {
    const {name, designation, msg, image} = item || {};

    return (
        <>
            <div className="all-project py-10 px-8 rounded-2xl text-center flex flex-col gap-8">
                <img className="mx-auto object-cover w-[130px] h-[130px] rounded-xl" src={image} alt="people"/>
                <p className="text-[#9D9D9D] capitalize leading-7 text-center">
                    {msg}
                </p>
                <div>
                    <h1 className="uppercase font-semibold text-2xl">
                        {name}
                    </h1>
                    <h3 className="capitalize mt-3">
                        {designation}
                    </h3>
                </div>
            </div>
        </>
    );
};

export default TestimonialItem;