import { post, get } from "../index/index"

const BASE_URL = "mobile/"

const eLogin = (data) => {
    return post(BASE_URL + 'elogin', data)
}


const eRegister = (data) => {
    return post(BASE_URL + 'eregister', data)
}

const tLogin = (data) => {
    return post(BASE_URL + 'tlogin', data)
}

export {
    eLogin,
    eRegister,
    tLogin
}