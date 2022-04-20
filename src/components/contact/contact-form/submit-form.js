import { apiRequest } from "../../../api-request"
import realtorJashanServer from "../../../api/realtor-jashan-server"

export const submitForm = ({ collection }) =>{
    const { post, res } = apiRequest()
    const submit = (event) =>{
        event.preventDefault()
        post(realtorJashanServer,'/api/contact-us', collection)
    }
    return { submit, res }
}