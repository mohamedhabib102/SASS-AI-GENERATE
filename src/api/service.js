


import { instanceAxios } from "@/lib/InstanceAxios";

const getNavbar = async(lang) => {
    const res = await instanceAxios.get(`/api/navbar`);
    return res.data
};

export {
    getNavbar
}

