import { useQuery } from "@tanstack/react-query"
import { getComparisons } from "@/features/prices/api/service"
import { QueryKeys } from "@/lib/react-query-keys"
import { useLang } from "@/hooks/useLang";





const useComparisons = ({ enabled = true } = {}) => 
{
    const {lang} = useLang()
    return useQuery({
        queryFn: () => getComparisons(lang),
        queryKey: [...QueryKeys.comparisons, lang],
        enabled,
    })
};


export {
    useComparisons
}