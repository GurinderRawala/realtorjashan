import axios from "axios";

export default axios.create({
    baseURL: '/laravel/api-permiles/public/api',
    headers: {
        Accept: 'application/json'
    }
})