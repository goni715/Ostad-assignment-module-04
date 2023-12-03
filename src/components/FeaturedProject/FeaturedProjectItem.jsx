import moment from 'moment';
import Image from "next/image";
const FeaturedProjectItem = ({item}) => {
    const {title, image, created_at} = item || {};
    return (
        <>
            <div>
                <Image src={image} className="w-full h-auto rounded-xl" placeholder="blur" blurDataURL={process.env.PLACEHOLDER_IMAGE} width={500} height={500} alt="featured"/>
                <p className="text-sm leading-6 text-[#2E3E5C] py-4">
                    App Design - {moment(created_at).format('LL')}
                </p>
                <h1 className="font-bold text-lg text-[#2E3E5C] capitalize leading-[28px] pr-8">
                    {title}
                </h1>
            </div>
        </>
    );
};

export default FeaturedProjectItem;