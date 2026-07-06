import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { QueryKeys } from "@/lib/react-query-keys";
import { getMarketing } from "@/features/home/api/service";
import { useLang } from "@/hooks/useLang";

export const useMarketing = () => {
  const { lang } = useLang();

  return useQuery({
    queryKey: [...QueryKeys.marketing, lang],
    queryFn: () => getMarketing(lang),
     staleTime: 1000 * 60 * 5, 
     gcTime: 1000 * 60 * 10,
     retry: 2,
     refetchOnWindowFocus: false,
     refetchOnReconnect: true,
  });
};

// export const useMarketingById = (id) => {
//   const { lang } = useLang();

//   return useQuery({
//     queryKey: [...QueryKeys.marketing, id, lang],
//     queryFn: () => getMarketingById(id, lang),
//     enabled: Boolean(id)
//   });
// };

// export const useCreateMarketing = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (formData) => createMarketing(formData),
//     onSuccess: () => {
//       // Invalidate marketing list queries to refresh UI
//       queryClient.invalidateQueries({ queryKey: QueryKeys.marketing });
//     },
//   });
// };
