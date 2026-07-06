import { useQuery } from "@tanstack/react-query"
import { getQuestion } from "../api/service"
import { QueryKeys } from "@/lib/react-query-keys"
import { useLang } from "@/hooks/useLang";


const useQuestion = ({ enabled = true } = {}) => 
    {
      const {lang} = useLang();
  return useQuery({
    queryFn: () => getQuestion(lang),
    queryKey: [...QueryKeys.question, lang],
    enabled,
  });
};


export {
    useQuestion
}