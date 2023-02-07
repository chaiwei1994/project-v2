import service from '../service.js'
export function getData(root, url, params) {
    service.get(url, { params: params || {} }).then(res => {
            if (res.status === 200) {
                root.tableData = res.data
                root.total = res.total
            }
        })
        .catch(err => {
            throw err
        })
}