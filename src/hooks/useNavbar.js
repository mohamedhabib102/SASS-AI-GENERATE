import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/lib/react-query-keys";
import { useLang } from "@/hooks/useLang";
import { getNavbar } from "@/api/service";




const useNavbar = () => 
{
    const {lang} = useLang()
    return useQuery({
        queryFn: () => getNavbar(lang),
        queryKey: QueryKeys.navbar
    })
}


export{
    useNavbar
}