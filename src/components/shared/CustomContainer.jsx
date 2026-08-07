



const CustomContainer = ({children, className = ""}) => {
    return (
        <div className={`container mx-auto lg:px-8 px-4 ${className}`}>
            {children}
        </div>
    )
}; export default CustomContainer;