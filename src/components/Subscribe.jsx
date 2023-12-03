
const Subscribe = () => {
    return (
        <>
            <div className="pt-16 pb-28 flex flex-col justify-center items-center gap-10">
                <h3 className="uppercase text-[#20B15A] text-xl font-medium">
                    subscribe
                </h3>

                <div>
                    <h1 className="font-semibold capitalize px-[544px] text-3xl text-center">
                        Subscribe to get the latest news about us
                    </h1>
                    <p className="text-[#8B8B8B] font-medium capitalize text-center pt-2.5">
                        Please drop your email below to get daily update about what we do
                    </p>

                </div>

                <div className="relative flex items-center">
                    <input className="w-full pl-4 border border-black rounded-2xl pr-96 py-4 placeholder:text-[#8B8B8B] outline-none" type="text" placeholder="Enter Your Email Address"/>
                    <button className="bg-[#F55F1D] absolute right-1.5 text-white rounded-2xl p-3">Subscribe</button>
                </div>

            </div>
        </>
    );
};

export default Subscribe;