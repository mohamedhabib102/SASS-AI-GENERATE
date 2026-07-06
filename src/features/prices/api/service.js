import { instanceAxios } from "@/lib/InstanceAxios"



const getPlans = async (lang) => {
    const res =  await instanceAxios.get(`/api/plans?lang=${lang}`);
    return res.data;
};


const getComparisons = async (lang) => {
    const res =  await instanceAxios.get(`/api/plan-comparisons?lang=${lang}`);
    return res.data
};





export {
    getPlans,
    getComparisons
}