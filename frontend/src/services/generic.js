import axios from "axios"

const url = "http://localhost:5000/api"

axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

axios.interceptors.response.use(config => {
    return config
}, async(error) => {
    const originalRequest = error.config;
    if (error.response.status == 401) {
        try {
            const response = await axios.get(url + "/users/refresh", { withCredentials: true })
            localStorage.setItem("token", response.data.accessToken)
            return axios.request(originalRequest)   
        } catch (error) {
            console.log("не авторизован")
            localStorage.removeItem("userName")
            localStorage.removeItem("role")
            localStorage.removeItem("token")
        }
    }
})

const request = async (method, itemUrl, data) => {
    let response
    if (method === ("get" || "delete")) {
        response = await axios[method](`${url}/${itemUrl}`, { withCredentials: true })
    } else {
        response = await axios[method](`${url}/${itemUrl}`, data, { withCredentials: true })
    }

    return response
}
export default request