import {create, defaults} from "axios"

const API = create({baseURL: process.env.REACT_APP_DEPLOYED_API})

const refreshAccessToken = async () => {
    const { data } = await API.post("/user/login", {
        actualRefreshToken: localStorage.getItem("refreshToken")
    })
    localStorage.setItem("accessToken", data.accessToken)
    localStorage.setItem("refreshToken", data.refreshToken)
    return data
}

const registerTokens = async () => {
    const { data } = await API.post("/user/login", {
        actualAcessToken: localStorage.getItem("accessToken"),
        actualRefreshToken: localStorage.getItem("refreshToken")
    })
    localStorage.setItem("accessToken", data.accessToken)
    localStorage.setItem("refreshToken", data.refreshToken)
    return data
}

API.interceptors.request.use(
    async (config) => {
        const accessToken = localStorage.getItem("accessToken")
        config.headers = {
            Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
            "Content-Type": "application/json"
        };
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

API.interceptors.response.use(
    (response) => response,
    async function (error) {
        const failedRequest = error.config
        if(
            // error.response.status === 401 &&
            failedRequest.url !== "/user/login"
        ) {
            await refreshAccessToken()
            await registerTokens()
            const retryRequest = API(failedRequest)
            return retryRequest
        } else {
            return Promise.reject(error)
        }
    }
)

export default API