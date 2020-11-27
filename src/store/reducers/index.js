import {ADD_BILLING, ADD_CATEGORY, SET_USER} from "../action";

export const initialState = {
    user: null,
    categories: [],
    billings: [
        {
            name: "Верхний счёт",
            amount: 20000000,
            blocked: 2000
        },
        {
            name: "Средний счёт",
            amount: 20000,
            blocked: 0
        },
        {
            name: "Нижний счёт",
            amount: 1200000000,
            blocked: 20000
        },
    ]
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {...state, user: action.value};
        case ADD_CATEGORY:
            state.categories.push(action.value)
            return {...state, categories: state.categories};
        case ADD_BILLING:
            state.billings.push(action.value)
            return {...state, billings: state.billings};
        default:
            return state;
    }
}