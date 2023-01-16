import axios from 'axios'
import { getToken } from '@/utils/setToken.js'
import { Message } from 'element-ui'

const service = axios.create({
    baseURL: '/api', //baseUrl会自动加在请求地址上
    timeout: 3000
})

// 添加请求拦截器
service.interceptors.request.use((config) => {
        // 在请求之前做什么(获取token)
        config.headers.token = getToken('token')
        return config
    }), ((error) => {
        return Promise.reject(error)
    })
    // 添加响应拦截器
service.interceptors.response.use((response) => {
    // 对响应的数据做些操作
    let { status, message } = response.data
    if (status !== 200) {
        Message({ message: message || 'error', type: 'warning' })
    }
    return response.data
}), (error) => {
    return Promise.reject(error)
}


export default service