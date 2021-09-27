import axios from "axios";

const cakeUrl = "http://localhost:5000/cake";
const flowerUrl = "http://localhost:5000/flower";

export const fetchCakes = () => axios.get(cakeUrl);
export const addCake = (newCake) => axios.post(`${cakeUrl}/addCake`, newCake);
export const updateCake = (id, cake) => axios.patch(`${cakeUrl}/${id}`, cake);
export const deleteCake = (id) => axios.delete(`${cakeUrl}/${id}`);

export const fetchFlowers = () => axios.get(flowerUrl);
export const addFlower = (newFlower) => axios.post(`${flowerUrl}/addFlower`, newFlower);
export const updateFlower = (id, flower) => axios.patch(`${flowerUrl}/${id}`, flower);
export const deleteFlower = (id) => axios.delete(`${flowerUrl}/${id}`);

