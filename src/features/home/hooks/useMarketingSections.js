const useMarketing = () => {
  const { lang } = useLang();

  return useQuery({
    queryKey: [...QueryKeys.marketing, lang],
    queryFn: () => getMarketing(lang),
  });
};

export { useMarketing };