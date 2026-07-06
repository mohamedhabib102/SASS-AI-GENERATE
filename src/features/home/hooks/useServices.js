import { useQuery } from "@tanstack/react-query"
import { QueryKeys } from "@/lib/react-query-keys"
import { useLang } from "@/hooks/useLang"
import { getServices } from "../api/service";



const useServices = ({ enabled = true } = {}) => {
    const {lang} = useLang()
  return useQuery({
    queryFn: () => getServices(lang),
    queryKey: [...QueryKeys.services, lang],
    enabled
  })
};


export {
    useServices
}