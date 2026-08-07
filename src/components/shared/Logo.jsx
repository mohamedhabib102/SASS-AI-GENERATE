import { Link } from "react-router-dom";
import { useLang } from "@/hooks/useLang";

const Logo = ({srcImg, smal,alt}) => {
    const { lang } = useLang();

    return (
        <Link to={`/${lang}`}>
            <img
                src={srcImg}
                alt={alt || "logo"}
                onError={(e) => { e.target.src = '/logo-black.svg' }}
                className={`w-auto h-10 lg:h-15 ${smal ? "h-10!" : ""} object-contain`}
            />
        </Link>
    )
}; export default Logo;