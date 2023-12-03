import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";
import Image from "next/image";

const TeamListItem = ({item}) => {
    const {name, bio, image, facebook, twitter, instagram} = item || {};
    return (
        <>
            <div className="member rounded-2xl relative">
                <Image className="w-full rounded-t-3xl h-[390px]" src={image} width={500} height={500} alt="member"/>
                <h1 className="text-3xl font-semibold leading-7 text-center text-[#101A29] pt-6 pb-7">
                    {name}
                </h1>
                <div className="bg-white w-[140px] flex justify-center items-center gap-6 py-4 absolute bottom-[108px] left-1/2 transform translate-x-[-50%] rounded-3xl text-[#737588]">
                    <a className="cursor-pointer" target="_blank" href={`//${facebook}`}>
                        <FaFacebookF />
                    </a>
                    <a className="cursor-pointer" target="_blank" href={`//${twitter}`}>
                        <FaTwitter/>
                    </a>
                    <a className="cursor-pointer" target="_blank" href={`//${instagram}`}>
                        <FaInstagram />
                    </a>

                </div>
            </div>
        </>
    );
};

export default TeamListItem;