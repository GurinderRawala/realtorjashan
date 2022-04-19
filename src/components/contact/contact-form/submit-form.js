import { apiRequest } from "../../../api-request"

export const submitForm = ({collection, handleInput}, setResponse) =>{
    const submit = async (event) =>{
        event.preventDefault()
        const res = await apiRequest.post('/api/contact-us', collection)
        if ( res === 'Created' ) handleInput("", "clear") 
        setResponse(res)
    }
    return { submit }
}