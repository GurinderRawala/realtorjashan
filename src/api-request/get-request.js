import realtorJashanServer from "../api/realtor-jashan-server"

export const getRequest = async (url) =>{
    try{
        const response = await realtorJashanServer.get(url)
        return response.data
    }catch(err){
        return err.response.data
    }
}