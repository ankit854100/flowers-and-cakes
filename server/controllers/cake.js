import CakeModel from "../models/cake.js"
import mongoose from 'mongoose';

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

export const updateCake = async (req,res) => {
    const {id:_id} = req.params;
    const updCake = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("No Cakes with this ID.");
    }

    const updatedCake = await CakeModel.findByIdAndUpdate(_id, updCake, {new: true});
    res.json(updatedCake);
}