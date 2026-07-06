
import { useQuery } from "@tanstack/react-query"
import { getPlans } from "../api/service"
import { QueryKeys } from "@/lib/react-query-keys"
import { useLang } from "@/hooks/useLang"




const usePlans = () => 
{
  const {lang} = useLang()
  return useQuery({
     queryFn: () => getPlans(lang),
     queryKey: [...QueryKeys.plans, lang]
  });
}


export {
    usePlans
}