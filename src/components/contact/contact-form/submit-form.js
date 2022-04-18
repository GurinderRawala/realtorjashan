import { apiRequest } from "../../../api-request"

export const submitForm = (collection, setResponse) =>{
    const submit = async (event) =>{
        event.preventDefault()
        const res = await apiRequest.post('/api/contact-us', collection)
        setResponse(res)
    }
    return { submit }
}