import { post, get } from "../index/index"

const SCHOOL_BASE_URL = "community/"

const add = (data) => {
    return post(SCHOOL_BASE_URL + 'add', data)
}

const getCommunitysPage = (params) => {
    return post(SCHOOL_BASE_URL + 'page', params)
}

const del = (params) => {
    return get(SCHOOL_BASE_URL + 'delete', params)
}

const edit = (data) => {
    return post(SCHOOL_BASE_URL + 'edit', data)
}

const allConmmunity = () => {
    return get(SCHOOL_BASE_URL + 'all')
}

const one = (params) => {
    return get(SCHOOL_BASE_URL + 'one', params)
}

const allSchool = () => {
    return get('school/all')
}

const getDepartBySchoolId = (params) => {
    return get('department/getDepartsBySchoolId', params)
}


export {
    allConmmunity,
    edit,
    del,
    getCommunitysPage,
    add,
    one,
    allSchool,
    getDepartBySchoolId
}