import {SET_USER, ADD_CATEGORY, ADD_BILLING} from "../action";

export const setUser = (user) => {
    return {
        type: SET_USER,
        value: user
    }
}

export const addCategory = (category) => {
    return {
        type: ADD_CATEGORY,
        value: category
    }
}

export const addBilling = (bill) => {
    return {
        type: ADD_BILLING,
        value: bill
    }
}