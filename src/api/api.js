import service from '../service.js'
// 封装登录接口
export function login(data) {
    return service({
        method: 'post',
        url: '/login',
        data
    })
}
//学生列表差群接口 
export function studentQuery(params) {
    return service({
        method: 'get',
        url: '/students',
        params
    })
}