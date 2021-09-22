import { ADD_CAKE, ADD_FLOWER, FETCH_ALL_CAKES, FETCH_ALL_FLOWERS, SET_CURRENT_ID } from "./actionTypes"

const initialState = {
    flowers: [],
    cakes: [],
    currentId: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        
        case FETCH_ALL_CAKES: return {
            ...state,
            cakes: action.payload
        };

        case ADD_CAKE: return {
            ...state,
            cakes: [...state.cakes, action.payload]
        };

        case FETCH_ALL_FLOWERS: return {
            ...state,
            flowers: action.payload
        }

        case ADD_FLOWER: return {
            ...state,
            flowers: [...state.flowers, action.payload]
        }

        case SET_CURRENT_ID: return {
            ...state,
            currentId: action.payload
        }

        default: return state;
    }
}

export default reducer;