import axios, { Method } from 'axios'

export const requestApi = async (url: string, method: Method, data?: object, params?: object) => {
    let baseUrl = window.location.origin + '/api'
    if(!url) return
    else baseUrl += url
    try {
        const requestData = await axios(baseUrl, {method, data, params})
        return requestData.data
    } catch (e) {
        return e
    }

}