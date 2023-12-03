import moment from 'moment';
const FeaturedProjectItem = ({item}) => {
    const {title, image, created_at} = item || {};
    return (
        <>
            <div>
                <img src={image} className="w-full rounded-xl" alt=""/>
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