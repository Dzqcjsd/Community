import { post, get } from "../index/index"

const BASE_URL = "communitySignup/"

const add = (data) => {
    return post(BASE_URL + 'add', data)
}


const del = (params) => {
    return get(BASE_URL + 'delete', params)
}

const edit = (data) => {
    return post(BASE_URL + 'edit', data)
}

const allSign = () => {
    return get(BASE_URL + 'all')
}

const one = (params) => {
    return get(BASE_URL + 'one', params)
}

const allStudent = () =>{
    return get('student/all')
}


export {
    allSign,
    edit,
    del,
    add,
    one,
    allStudent,
}