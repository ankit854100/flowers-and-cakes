import { ADD_CAKE, ADD_FLOWER, DELETE_CAKE, DELETE_FLOWER, FETCH_ALL_CAKES, FETCH_ALL_FLOWERS, SET_CURRENT_ID, SET_ID_CATEGORY, UPDATE_CAKE, UPDATE_FLOWER } from "./actionTypes"

const initialState = {
    flowers: [],
    cakes: [],
    currentId: null,
    idCategory: null
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

        case UPDATE_CAKE: return {
            ...state,
            cakes: state.cakes.map((cake) => (cake._id === action.payload._id ? action.payload: cake))
        }

        case DELETE_CAKE: return {
            ...state,
            cakes: state.cakes.filter((cake) => cake._id !== action.payload)
        }

        case FETCH_ALL_FLOWERS: return {
            ...state,
            flowers: action.payload
        }

        case ADD_FLOWER: return {
            ...state,
            flowers: [...state.flowers, action.payload]
        }

        case UPDATE_FLOWER: return {
            ...state,
            flowers: state.flowers.map(flower => (flower._id === action.payload._id ? action.payload: flower))
        }

        case DELETE_FLOWER: return {
            ...state,
            flowers: state.flowers.filter((flower) => flower._id !== action.payload)
        }

        case SET_CURRENT_ID: return {
            ...state,
            currentId: action.payload
        }

        case SET_ID_CATEGORY: return {
            ...state,
            idCategory: action.payload
        }

        default: return state;
    }
}

export default reducer;