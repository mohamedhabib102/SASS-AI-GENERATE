import { useQuery } from "@tanstack/react-query";
import { useLang } from "@/hooks/useLang";
import { getServicesPage } from "@/features/services/pages/api/service";
import { QueryKeys } from "@/lib/react-query-keys";
const useServicesPage = (page) => {
  const { lang } = useLang();

  return useQuery({
    queryKey: [...QueryKeys.servicesPage, lang, page],
    queryFn: () => getServicesPage({ lang, page }),
  });
};

export default useServicesPage;