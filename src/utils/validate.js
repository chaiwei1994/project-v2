// 用户名正则校验
export function nameRule(rule, value, callback) {
    let reg = /^[a-zA-Z0-9]{4,10}$/;
    if (value === '') {
        callback(new Error('请输入用户名'))
    } else if (!reg.test(value)) {
        callback(new Error('请输入4-10位用户名'))
    } else {
        callback()
    }
}
// 密码正则匹配
export function passRule(rule, value, callback) {
    //请输入6-12位密码 包含大小写字母数字和特殊字符
    let reg = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
    if (value === '') {
        callback(new Error('请输入密码 '))
    } else if (!reg.test(value)) {
        callback(new Error('6-12位密码包含大小写字母数字和特殊字符'))
    } else {
        callback()
    }
}