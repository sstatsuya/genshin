import axios from "axios";
const CallAPI = (url, endpoint, method, body) => {
    return axios({
        method: method,
        url: `${url}/${endpoint}`,
        data: body
    })
}

export default CallAPI
