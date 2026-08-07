import { instanceAxios } from "@/lib/InstanceAxios";

const getHeroAbout = async (lang) => {
    const res = await instanceAxios.get(`/api/about-hero?lang=${lang}`);

    return res.data;
};

const getWhayOfferService = async (lang) => {
    const res = await instanceAxios.get(`/api/about-items?lang=${lang}`);

    return res.data;
};

const getHeaderAbout = async (lang) => {
    const res = await instanceAxios.get(`/api/about-sections?lang=${lang}`);

    return res.data;
}

const getEndAbout = async (lang) => {
    const res = await instanceAxios.get(`/api/about-end-section?lang=${lang}`)
    return res.data;
}
export { getHeroAbout, getWhayOfferService, getHeaderAbout , getEndAbout };
