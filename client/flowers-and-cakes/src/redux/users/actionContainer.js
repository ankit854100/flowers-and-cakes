import * as api from '../../api'
import { ADD_USER, GET_ALL_USERS, RESET_USER } from './actionTypes';

export const addUser = (newUser) => async (dispatch) => {
    try {
        const { data } = await api.addUser(newUser);

        // console.log(data);

        dispatch({type: ADD_USER, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const getAllUsers = (email) => async (dispatch) => {
    try {
        // const {data} = await api.getUsers();

        // for(let i = 0; i < data.length; i++){
        //     if(data[i].email === email){
        //         // console.log(data[i]);
        //         dispatch({type: GET_ALL_USERS, payload: data[i]});
        //         break;
        //     }
        // }
        const { data } = await api.getUserByEmail(email);

        dispatch({type: GET_ALL_USERS, payload: data[0]});

    } catch (error) {
        console.log(error);
    }
}

export const updateUser = (id, user) => async (dispatch) => {
    try {
        const { data } = await api.updateUser(id, user);

        // console.log(user);
        dispatch({type: GET_ALL_USERS, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const resetUser = () => async (dispatch) => {
    try {
        console.log('working');
        dispatch({type: RESET_USER, payload: {name: "", isAdmin: false, email: "", cart: [], orders: []}});
    } catch (error) {
        console.log(error);
    }
}

// const addToCart = (id, usersData) => async (dispatch) => {
//     try {
//         const {data} = await api.updateUser(id, usersData);

//         dispatch({GET_ALL_USERS, payload: data});
//     } catch (error) {
//         console.log(error);
//     }
// }