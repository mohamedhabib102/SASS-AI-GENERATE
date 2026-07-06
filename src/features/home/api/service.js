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


const getTestimonial = async (page) => await instanceAxios.get(`/api/feedbacks?page=${page}`).then((res)=> res.data)


const getQuestion = async (lang) => {
    const res = await instanceAxios.get(`/api/faqs?lang=${lang}`)
    return res.data.data;
}

const getHeroSection = async(lang) => {
    const res = await instanceAxios.get(`/api/hero-section?lang=${lang}`)
    return res.data;
}


const getServiceManage = async (lang) => {
    const res = await instanceAxios.get(`api/manage-services?lang=${lang}`);
    return res.data
}

const getServices = async(lang) => {
    const res = await instanceAxios.get(`api/home/services?lang=${lang}`);
    return res.data
}


export {
    getNavbar,
    getMarketing,
    // createMarketing,
    // getMarketingById,
    getTestimonial,
    getQuestion,
    getHeroSection,
    getServiceManage,
    getServices
}