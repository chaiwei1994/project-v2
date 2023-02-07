import service from '../service.js'
import qs from 'qs'
// 封装登录接口
export function login(data) {
    return service({
        method: 'post',
        url: '/login',
        data
    })
}
//学生列表数据接口 
export function studentData(params) {
    return service({
        method: 'get',
        url: '/students',
        params
    })
}
// 学生列表删除接口
export function studentDel(id) {
    return service({
        method: 'delete',
        url: `/students/${id}`
    })
}

// 信息列表新增和修改接口
export function info(type, data) {
    data = qs.stringify(data)
    let obj = { method: type, url: '/info', data }
    return service(obj)
}
// 信息列表查询接口
export function getInfo() {
    return service({
        method: 'get',
        url: '/info',
    })
}

// 信息列表删除
export function infoDel(id) {
    return service({
        method: 'delete',
        url: `/info/${id}`
    })
}