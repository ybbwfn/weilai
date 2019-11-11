import qs from 'qs'
import '@/mock/shopList'
const axios = require('axios')
axios.default.timeout = 5000
// axios.default.baseUrl = '/api'

//axios.defaults.withCredentials = true

//axios.default.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//请求拦截
// axios.interceptors.request.use(
//     config => {
//         const token = store.state.token;
//         token && (config.headers.Authorization = token);
//         return config;
//     },
//     error => {
//         return Promise.error(error);
//     }
// )

//响应拦截
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (error) {
            return Promise.reject(error);
        } else {
            console.log(error);
        }
    }
);


function apiAxios(method, url, params) {
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: url,
            data: method === 'POST' || method === 'PUT' ? params : null,
            params: method === 'GET' || method === 'DELETE' ? params : null,
            withCredentials: true
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

export default {
    get: function (url, params) {
        return apiAxios('GET', url, params)
    },
    post2: function (url, params) {
        return apiAxios('POST', url, qs.stringify(params))
    },
    post: function (url, params) {
        return apiAxios('POST', url, params)
    },
    put: function (url, params) {
        return apiAxios('PUT', url, params)
    },
    delete: function (url, params) {
        return apiAxios('DELETE', url, params)
    }
}
