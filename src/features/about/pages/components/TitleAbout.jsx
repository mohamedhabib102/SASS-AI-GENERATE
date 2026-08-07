




const TitleAbout = ({
    title, description
}) => {
    return (
        <div className="text-center max-w-6xl mx-auto mb-8 md:mb-12 px-4">
            <h1 className="text-2xl md:text-3xl font-semibold text-main">{title}</h1>
            <p className="text-gray text-sm md:text-lg font-normal mt-3 md:mt-5">{description}</p>
            <img
             src="/images/titleAbout.svg"
             title="icon about"
             alt="icon"
             className="mx-auto mt-2"
            />
        </div>
    )
};
export default TitleAbout