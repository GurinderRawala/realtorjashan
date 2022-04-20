export const getRequest = async (api, url, handleInput) =>{
    try{
        handleInput(true, "isLoading")
        const response = await api.get(url)
        handleInput(false, "isLoading")
        handleInput(response.data, "response")
    }catch(err){
        handleInput(err.response.data, "response")
        handleInput(false, "isLoading")
    }
}