import { useQuery } from "@tanstack/react-query";
import { getNavbar } from "../api/service";
import { QueryKeys } from "@/lib/react-query-keys";




const useNavbar = () => 
{
    return useQuery({
        queryFn: getNavbar,
        queryKey: QueryKeys.navbar
    })
}


export{
    useNavbar
}