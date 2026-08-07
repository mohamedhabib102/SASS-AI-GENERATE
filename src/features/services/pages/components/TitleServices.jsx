



const TitleServices = ({title, description}) => {
    return (
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12 px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-main">{title}</h2>
            <p className="text-desc text-sm md:text-lg font-normal mt-3 md:mt-5">{description}</p>
        </div>
    )
}; export default TitleServices