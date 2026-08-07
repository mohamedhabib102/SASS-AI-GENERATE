import { instanceAxios } from "@/lib/InstanceAxios";

export const getServicesPage = async ({ lang, page }) => {
  const res = await instanceAxios.get("/api/services-page", {
    params: {
      lang,
      page,
    },
  });

  return res.data;
};