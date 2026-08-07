import { useQuery } from "@tanstack/react-query"
import { getServiceManage } from "../api/service"
import { QueryKeys } from "@/lib/react-query-keys"
import { useLang } from "@/hooks/useLang"

const useServiceManage = ({ enabled = true } = {}) => {
  const { lang } = useLang()

  return useQuery({
    queryFn: () => getServiceManage(lang),
    queryKey: [...QueryKeys.serviceManage, lang],
    enabled,
  })
}

export { useServiceManage }