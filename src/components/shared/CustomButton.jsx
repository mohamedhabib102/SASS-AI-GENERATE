import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useLang } from "@/hooks/lang/useLang";

const CustomButton = ({ translationKey, link, location }) => {
    const { t } = useLang();
    return (
        <Button className={`text-white font-medium bg-primary hover:bg-blue-600 p-4 ${location === "header" && "py-5"}`}>
            {link ? (
                <Link to={link}>{t(translationKey)}</Link>
            ) : (
                translationKey && t(translationKey)
            )}
        </Button>   
    )
};

export default CustomButton;