export const postRequest = async (api, url, payload, handleInput) =>{
    try{
        handleInput(true, "isLoading")
        const response = await api.post(url, payload)
        handleInput(false, "isLoading")
        handleInput(response?.data, "response")
    }catch(err){
        handleInput(err?.response?.data, "response")
        handleInput(false, "isLoading")
    }
}