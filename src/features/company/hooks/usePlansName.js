import { useQuery } from "@tanstack/react-query";
import { getPlansName } from "../api/service";
import { QueryKeys } from "@/lib/query-keys";




const usePlansName = () => {
    return useQuery({
        queryFn: getPlansName,
        queryKey: QueryKeys.plans
    });
}



export {
    usePlansName
}