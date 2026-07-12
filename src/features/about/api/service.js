import { instanceAxios } from "@/lib/InstanceAxios";



const getHeroAbout = async (lang) => {
    const res = await instanceAxios.get(`/api/about-hero?lang=${lang}`);

    return res.data;
}