import realtorJashanServer from "../api/realtor-jashan-server"

export const postRequest = async (url, payload) =>{
    try{
        const response = await realtorJashanServer.post(url, payload)
        return response.data
    }catch(err){
        return err.response.data
    }
}