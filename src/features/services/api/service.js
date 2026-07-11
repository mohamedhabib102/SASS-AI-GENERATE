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

const getServiceDetails = async ({ id }) => {
  const res = await instanceAxios.get(`/api/services-details/${id}/section-one`);

  return res.data;
};

export { getServicesPage, getServiceDetails };
