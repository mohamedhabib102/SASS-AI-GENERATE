import { useQuery } from "@tanstack/react-query"
import { getHeroAbout } from "../api/service";
import { QueryKeys } from "@/lib/react-query-keys";
import { useLang } from "@/hooks/useLang";


const useHeroAbout = () => {
    const { lang } = useLang();
    return useQuery({
        queryKey: [...QueryKeys.heroAbout, lang],
        queryFn: () => getHeroAbout(lang),
    })
}

export default useHeroAbout