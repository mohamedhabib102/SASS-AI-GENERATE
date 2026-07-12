import { instanceAxios } from "@/lib/InstanceAxios";

const getServicesPage = async ({ lang, page }) => {
  const res = await instanceAxios.get("/api/services-page", {
    params: {
      lang,
      page,
    },
  });

  return res.data;
};

const getServiceDetails = async (id, lang) => {
  const res = await instanceAxios.get(`/api/service-details/${id}?lang=${lang}`);

  return res.data;
};

export { getServicesPage, getServiceDetails };
