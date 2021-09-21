import CakeModel from "../models/cake.js"

export const getAllCakes = async (req,res) => {
    try {
        const cakeData = await CakeModel.find();
        res.status(200).json(cakeData);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const addCake = async (req,res) => {
    const cake = req.body;
    const newcake = new CakeModel(cake);

    try {
        await newcake.save();
        res.status(201).json(newcake);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}