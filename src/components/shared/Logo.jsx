import { Link } from "react-router-dom";





const Logo = ({srcImg, smal}) => {
    return (
         <Link to={"/"}>
        <img
            src={srcImg}
            alt="logo"
            className={`w-auto h-10 lg:h-15 ${smal && "h-10!"} object-contain`}
        />
        </Link>
    )
}; export default Logo;