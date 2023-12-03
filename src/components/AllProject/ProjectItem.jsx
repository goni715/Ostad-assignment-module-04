
const ProjectItem = ({item}) => {
    const {title, image} = item || {}
    return (
        <>
            <div className="all-project py-6 rounded-2xl">
                <img className="w-11/12 mx-auto object-cover rounded-2xl" src={image} alt=""/>
                <h1 className="uppercase font-semibold text-2xl pt-6 pl-[28px]">
                    {title}
                </h1>
            </div>
        </>
    );
};

export default ProjectItem;