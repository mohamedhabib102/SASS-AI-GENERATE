import { useQuery } from "@tanstack/react-query"
import { getWhayOfferService } from "../api/service";
import { QueryKeys } from "@/lib/react-query-keys";
import { useLang } from "@/hooks/useLang";


const useWhatWeOfferService = () => {
    const { lang } = useLang();
    return useQuery({
        queryKey: [...QueryKeys.whatWeOffer, lang],
        queryFn: () => getWhayOfferService(lang),
    })
}

export default useWhatWeOfferService