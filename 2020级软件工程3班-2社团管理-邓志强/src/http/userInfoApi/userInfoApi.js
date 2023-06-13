import { post, get } from "../index/index"

const BASE_URL = "userinfo/"

const add = (data) => {
    return post(BASE_URL + 'add', data)
}

const del = (params) => {
    return get(BASE_URL + 'delete', params)
}

const edit = (data) => {
    return post(BASE_URL + 'edit', data)
}

const allUserInfo = () => {
    return get(BASE_URL + 'all')
}

const one = (params) => {
    return get(BASE_URL + 'one', params)
}

const allSchool = () =>{
    return get('school/all')
}

const getAssitentFoSelectByUserTypeBySchoolId = (params) => {
    return get(BASE_URL + 'assitant', params)
}

const login = (data) => {
    return post(BASE_URL + 'login', data)
}

const register = (data) => {
    return post(BASE_URL + 'register', data)
}

export {
    allUserInfo,
    edit,
    del,
    add,
    one,
    allSchool,
    register,
    login,
    getAssitentFoSelectByUserTypeBySchoolId
}