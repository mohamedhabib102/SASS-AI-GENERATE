import { instanceAxios } from "@/lib/InstanceAxios"



const createCompanyProfile = async(data) => {
    const res = await instanceAxios.post(`/api/companies`, data)

    return res.data
}



const getPlansName = async () => {
    const res = await instanceAxios.get(`/api/plans-names`);

    return res.data.data
}



export {
    createCompanyProfile,
    getPlansName
}