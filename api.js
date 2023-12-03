import Axios from "axios";

// Axios.create({
//     baseURL: 'http://192.168.0.70:8083'
// })

export function getdownload(type) {
    return Axios.get('http://www.sguchain.io:8083/prod-api/openApi/apply/' + type)
}
export function getNews(num, size, desc, id) {
    return Axios.get('http://www.sguchain.io:8083/prod-api/openApi/news/list', {
        params: {
            pageNum: num,
            pageSize: size,
            isAsc: desc,
            id: id,
            type: 1,
            orderByColumn: 'sort'
        }
    })
}
export function newsContent(id) {
    return Axios.get('http://www.sguchain.io:8083/prod-api/openApi/news/' + id)
}
export function book(num) {
    return Axios.get('http://www.sguchain.io:8083/prod-api/openApi/paper/' + num)
}
export function content(cur, all, two) {
    return Axios.get('http://www.sguchain.io:8083/prod-api/openApi/news/list', {
        params: {
            pageNum: cur,
            pageSize: all,
            type: two,
            isAsc: 'desc',
            orderByColumn: 'create_time'
        }
    })
}