import { post, get } from "../index/index"

const BASE_URL = "teacher/"

const add = (data) => {
    return post(BASE_URL + 'add', data)
}



const del = (params) => {
    return get(BASE_URL + 'delete', params)
}

const edit = (data) => {
    return post(BASE_URL + 'edit', data)
}

const al = () => {
    return get(BASE_URL + 'all')
}

const one = (params) => {
    return get(BASE_URL + 'one', params)
}

const allSchool = () =>{
    return get('school/all')
}

const getTeachersBySchool = (params) => {
    return get(BASE_URL + 'getTeachersBySchool', params)
}

const getTeacherByTeacherNo = (params) => {
    return get(BASE_URL + 'getTeacherByTeacherNo', params)
}

export {
    al,
    edit,
    del,
    add,
    one,
    allSchool,
    getTeachersBySchool,
    getTeacherByTeacherNo
}