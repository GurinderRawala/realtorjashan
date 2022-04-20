import { postRequest } from "./post-request";
import { getRequest } from "./get-request";
import { CollectInput } from '../collect-input';

export const apiRequest = () => {
    const { collection, handleInput } = CollectInput()
    postRequest.bind(null, handleInput)
    getRequest.bind(null, handleInput)
    return{
        post:(api, url, payload) => postRequest(api, url, payload, handleInput),
        get: (api, url) => getRequest(api, url, handleInput),
        res: collection
    }
}