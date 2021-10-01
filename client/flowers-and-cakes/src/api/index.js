import axios from "axios";

const cakeUrl = "https://flowers-and-cakes.herokuapp.com/cake";
const flowerUrl = "https://flowers-and-cakes.herokuapp.com/flower";
const userUrl = "https://flowers-and-cakes.herokuapp.com/user";
const tranUrl = "https://flowers-and-cakes.herokuapp.com/tran";
const feedbackUrl = "https://flowers-and-cakes.herokuapp.com/feedback";
const newsLetterEmailUrl = "https://flowers-and-cakes.herokuapp.com/newsletter";

export const fetchCakes = () => axios.get(cakeUrl);
export const addCake = (newCake) => axios.post(`${cakeUrl}/addCake`, newCake);
export const updateCake = (id, cake) => axios.patch(`${cakeUrl}/${id}`, cake);
export const deleteCake = (id) => axios.delete(`${cakeUrl}/${id}`);
export const getOneCake = (id) => axios.get(`${cakeUrl}/${id}`);

export const fetchFlowers = () => axios.get(flowerUrl);
export const addFlower = (newFlower) => axios.post(`${flowerUrl}/addFlower`, newFlower);
export const updateFlower = (id, flower) => axios.patch(`${flowerUrl}/${id}`, flower);
export const deleteFlower = (id) => axios.delete(`${flowerUrl}/${id}`);
export const getOneFlower = (id) => axios.get(`${flowerUrl}/${id}`);

export const getUsers = () => axios.get(`${userUrl}`);
export const addUser = (newUser) => axios.post(`${userUrl}`, newUser);
export const updateUser = (id, user) => axios.patch(`${userUrl}/${id}`, user);
export const getUserByEmail = (email) => axios.get(`${userUrl}/email/${email}`);

export const addTransaction = (data) => axios.post(`${tranUrl}`, data);

export const addFeedback = (data) => axios.post(`${feedbackUrl}`, data);

export const addNewsLetterEmail = (email) => axios.post(`${newsLetterEmailUrl}`, email);