// import { FORGET_PASSWORD, LOGIN_USER, NEW_CLIENT, RESET_PASSWORD, UPDATE_CLIENT, VERIFY_CODE } from "../types"

import { LOGIN_ERROR, LOGIN_USER, USER_TYPE } from "../types"

const initialState = {

    LoginUser: null,
    Loading: true,
    userType: '',
    Errors: null,
}

const AuthReducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {


        case LOGIN_USER:
            return { ...state, LoginUser: payload, Loading: false }

        case LOGIN_ERROR:
            return { ...state, Errors: payload, Loading: false }

        case USER_TYPE:
            return { ...state, userType: payload }

        default:
            return state
    }
}


export default AuthReducer