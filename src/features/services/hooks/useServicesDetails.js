import { useQuery } from "@tanstack/react-query";
import { useLang } from "@/hooks/useLang";
import { getServiceDetails } from "@/features/services/api/service";
import { QueryKeys } from "@/lib/react-query-keys";

const useServiceDetails = (id) => {
  const { lang } = useLang();

  return useQuery({
    queryKey: [...QueryKeys.serviceDetails, id, lang],
    queryFn: () => getServiceDetails(id, lang),
    enabled: !!id,
  });
};

export {
  useServiceDetails
};