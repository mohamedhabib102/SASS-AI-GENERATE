import { useQuery } from "@tanstack/react-query"
import { getQuestion } from "../api/service"
import { QueryKeys } from "@/lib/react-query-keys"


const useQuestion = ({ enabled = true } = {}) => 
    {
  return useQuery({
    queryFn: getQuestion,
    queryKey: QueryKeys.question,
    enabled,
  });
};


export {
    useQuestion
}