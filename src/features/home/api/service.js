import { instanceAxios } from "@/lib/InstanceAxios"



const getNavbar = async() => {
    const res = await instanceAxios.get(`api/navbar`);
    return res.data
};


const getMarketing = async (lang) => {
  const res = await instanceAxios.get("/api/mywork/marketing-sections", {
    params: {
      lang,
    },
  });

  return res.data;
};

// const createMarketing = async (formData) => {
//   const res = await instanceAxios.post("/api/mywork/marketing-sections", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
//   return res.data;
// };

// const getMarketingById = async (id, lang) => {
//   const res = await instanceAxios.get(`/api/mywork/marketing-sections/${id}`, {
//     params: {
//       lang,
//     },
//   });
//   return res.data;
// };


const getServices = async() => {
    const res =  await instanceAxios.get(`/api/services-details/3/section-two`);
    return res.data;
}


const getTestimonial = async (page) => await instanceAxios.get(`/api/feedbacks?page=${page}`).then((res)=> res.data)


const getQuestion = async () => {
    const res = await instanceAxios.get(`/api/faqs`)
    return res.data;
}

const getHeroSection = async(lang) => {
    const res = await instanceAxios.get(`/api/hero-section?lang=${lang}`)
    return res.data;
}


export {
    getNavbar,
    getMarketing,
    // createMarketing,
    // getMarketingById,
    getServices,
    getTestimonial,
    getQuestion,
    getHeroSection
}