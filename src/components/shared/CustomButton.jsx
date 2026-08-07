import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useLang } from "@/hooks/useLang";

const CustomButton = ({ translationKey, link, location, ...props }) => {
    const { t } = useLang();
    const btnClasses = `text-white font-medium bg-primary hover:bg-primary/80 p-4 ${location === "header" && "py-5"}`;

    if (link) {
        return (
            <Button asChild className={btnClasses} {...props}>
                <Link to={link}>{t(translationKey)}</Link>
            </Button>
        );
    }

    return (
        <Button className={btnClasses} {...props}>
            {translationKey && t(translationKey)}
        </Button>   
    );
};

export default CustomButton;