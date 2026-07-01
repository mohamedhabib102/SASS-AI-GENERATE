import { QueryClient } from "@tanstack/react-query";





export const queryClient  = new QueryClient({
    defaultOptions: {
        queries: {
            // about caching and stale data
            staleTime: 5 * 1000 * 60,
            gcTime: 10 * 1000 * 60,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: 2,
            // refetchOnMount: false // always true
        }
    }
})