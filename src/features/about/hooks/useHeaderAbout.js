



import { useQuery } from "@tanstack/react-query"
import { getHeaderAbout } from "../api/service";
import { QueryKeys } from "@/lib/react-query-keys";
import { useLang } from "@/hooks/useLang";


const useHeaderAbout = () => {
    const { lang } = useLang();
    return useQuery({
        queryKey: [...QueryKeys.headerAbout, lang],
        queryFn: () => getHeaderAbout(lang),
    })
}

export default useHeaderAbout