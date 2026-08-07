import { instanceAxios } from "@/lib/InstanceAxios"


const sendContactMessageFun = async (data)=>
    await instanceAxios.post('/api/send-message',data)
    .then(res => res.data)




const getContactInfoFun = async () =>
    await instanceAxios.get('/api/information-contact')
    .then(res => res.data)





export {
    sendContactMessageFun,
    getContactInfoFun
}