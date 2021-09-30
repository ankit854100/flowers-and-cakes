import { ADD_USER, GET_ALL_USERS, RESET_USER } from "./actionTypes"

const initialState = {
    userDetails: {
        name: "",
        email: "",
        isAdmin: false,
        cart: [],
        orders: []
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_USER: return {
            ...state,
            userDetails: action.payload
        }

        case GET_ALL_USERS: return {
            ...state,
            userDetails: action.payload
        }

        case RESET_USER: return {
            ...state,
            userDetails: action.payload
        }

        default: return state
    }
}

export default reducer;