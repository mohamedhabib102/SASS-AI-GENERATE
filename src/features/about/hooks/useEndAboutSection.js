import { useQuery } from "@tanstack/react-query"
import { getEndAbout } from "../api/service";
import { QueryKeys } from "@/lib/react-query-keys";
import { useLang } from "@/hooks/useLang";


const useEndAboutSection = () => {
    const { lang } = useLang();
    return useQuery({
        queryKey: [...QueryKeys.endAboutSection, lang],
        queryFn: () => getEndAbout(lang),
    })
}

export default useEndAboutSection