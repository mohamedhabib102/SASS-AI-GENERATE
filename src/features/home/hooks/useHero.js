import { useQuery } from "@tanstack/react-query"
import { getHeroSection } from "../api/service"
import { QueryKeys } from "@/lib/react-query-keys"
import { useLang } from "@/hooks/useLang"



const useHero = () => {
    const {lang} = useLang();
    return useQuery({
        queryFn: () => getHeroSection(lang),
        queryKey: [...QueryKeys.hero, lang]
    })
}

export{
    useHero
}