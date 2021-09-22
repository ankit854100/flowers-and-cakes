import { FETCH_ALL_CAKES, ADD_CAKE, FETCH_ALL_FLOWERS, ADD_FLOWER, SET_CURRENT_ID, UPDATE_CAKE, SET_ID_CATEGORY, UPDATE_FLOWER } from "./actionTypes"
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

        console.log(id, flower);
  
        dispatch({ type: UPDATE_FLOWER, payload: data });
    } catch (error) {
        console.log(error);
    }
}
