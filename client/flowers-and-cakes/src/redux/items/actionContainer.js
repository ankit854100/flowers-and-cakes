import { FETCH_ALL_CAKES, ADD_CAKE, FETCH_ALL_FLOWERS, ADD_FLOWER, SET_CURRENT_ID, UPDATE_CAKE, SET_ID_CATEGORY, UPDATE_FLOWER, DELETE_CAKE, DELETE_FLOWER, CAKE_CATEGORY, FLOWER_CATEGORY, SELECTED_PRODUCT, SET_SEARCH } from "./actionTypes"
import * as api from "../../api";

export const setCurrentId = (id) => (dispatch) => {
    dispatch({type: SET_CURRENT_ID, payload: id});
}

export const setIdCategory = (category) => (dispatch) => {
    dispatch({type: SET_ID_CATEGORY, payload: category});
} 

export const getCakes = () => async (dispatch) =>{

    try {
        const {data} = await api.fetchCakes();

        // console.log(data);

        dispatch({type: FETCH_ALL_CAKES, payload: data});
    } catch (error) {
        console.log(error.message)
    }
}

export const addCake = (cake) => async (dispatch) => {
    try {
        const {data} = await api.addCake(cake);
        
        dispatch({type: ADD_CAKE, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateCake = (id, cake) => async (dispatch) => {
    try {
        const { data } = await api.updateCake(id, cake);
  
      dispatch({ type: UPDATE_CAKE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteCake = (id) => async (dispatch) => {
    try {
        await api.deleteCake(id);

        dispatch({type: DELETE_CAKE, payload: id});

    } catch (error) {
        console.log(error);
    }
}

export const getFlowers = () => async (dispatch) => {
    try {
        const {data} = await api.fetchFlowers();

        // console.log(data);
        dispatch({type: FETCH_ALL_FLOWERS, payload: data})

    } catch (error) {
        console.log(error);   
    }
} 

export const addFlowers = (flower) => async (dispatch) => {
    
    try {
        const {data} = await api.addFlower(flower);

        dispatch({type: ADD_FLOWER, payload: data});
    } catch (error) {
        console.log(error)
    }

}

export const updateFlower = (id, flower) => async (dispatch) => {
    try {
        const { data } = await api.updateFlower(id, flower);

        // console.log(id, flower);
  
        dispatch({ type: UPDATE_FLOWER, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteFlower = (id) => async (dispatch) => {
    try {
        api.deleteFlower(id);

        dispatch({type: DELETE_FLOWER, payload: id});
    } catch (error) {
        console.log(error);
    }
}


export const setCakeCategory = (category) => (dispatch) => {
    dispatch({type:CAKE_CATEGORY, payload: category});
}

export const setFlowerCategory = (category) => (dispatch) => {
    dispatch({type:FLOWER_CATEGORY, payload: category});
}

export const setSelectedProduct = (product) => (dispatch) => {
    dispatch({type: SELECTED_PRODUCT, payload: product});
}

export const setSearch = (search) => (dispatch) => {
    dispatch({type: SET_SEARCH, payload: search});
}

export const addTransaction = (item) => async (dispatch) => {
    try {
        const { data } = await api.addTransaction(item);
    } catch (error) {
        console.log(error);
    }
}

export const getOneCake = (id) => async (dispatch) => {
    try {
        // console.log(id);
        const { data } = await api.getOneCake(id);
        // console.log(data);
        api.updateCake(id, {...data, quantity: data.quantity - 1});
    } catch (error) {
        console.log(error);
    }
}

export const getOneFlower = (id) => async (dispatch) => {
    try {
        // console.log(id);
        const { data } = await api.getOneFlower(id);
        // console.log(data);
        api.updateFlower(id, {...data, quantity: data.quantity - 1});
    } catch (error) {
        console.log(error);
    }
}

export const sendFeedback = (data) => async (dispatch) => {
    try {
        api.addFeedback(data);
    } catch (error) {
        console.log(error);
    }
}

export const addNewsLetterEmail = (email) => async (dispatch) => {
    try{
        api.addNewsLetterEmail(email);
    }
    catch(error){
        console.log(error);
    }
}