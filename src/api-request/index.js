import { postRequest } from "./post-request";
import { getRequest } from "./get-request";

// eslint-disable-next-line import/no-anonymous-default-export
export const apiRequest = {
    post: postRequest,
    get: getRequest
}