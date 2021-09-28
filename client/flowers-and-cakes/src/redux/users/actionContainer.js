import * as api from '../../api'
import { ADD_USER, GET_ALL_USERS } from './actionTypes';

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
        const {data} = await api.getUsers();

        for(let i = 0; i < data.length; i++){
            if(data[i].email === email){
                // console.log(data[i]);
                dispatch({type: GET_ALL_USERS, payload: data[i]});
                break;
            }
        }

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

// const addToCart = (id, usersData) => async (dispatch) => {
//     try {
//         const {data} = await api.updateUser(id, usersData);

//         dispatch({GET_ALL_USERS, payload: data});
//     } catch (error) {
//         console.log(error);
//     }
// }