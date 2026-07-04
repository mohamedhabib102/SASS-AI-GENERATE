import { instanceAxios } from "@/lib/InstanceAxios"



const getNavbar = async() => {
    const res = await instanceAxios.get(`api/navbar`);
    return res.data
};


const getMarketing = async (lang) => {
    const res = await instanceAxios.get(`mywork/marketing-sections?lang=${lang}`);
    return res.data;
}


const getServices = async() => {
    const res =  await instanceAxios.get(`/api/services-details/3/section-two`);
    return res.data;
}


const getTestimonial = async (page) => await instanceAxios.get(`/api/feedbacks?page=${page}`).then((res)=> res.data)


export {
    getNavbar,
    getMarketing,
    getServices,
    getTestimonial
}