import FlowerModel from "../models/flower.js"
import mongoose from 'mongoose';

export const getAllFlowers = async (req,res) => {
    try {
        const flowerData = await FlowerModel.find();
        res.status(200).json(flowerData);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const addFlower = async (req,res) => {
    const flower = req.body;
    const newflower = new FlowerModel(flower);

    try {
        await newflower.save();
        res.status(201).json(newflower);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updateFlower = async (req, res) => {
    const {id:_id} = req.params;
    const updFlower = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("No Cakes with this ID.");
    }

    const updatedFlower = await FlowerModel.findByIdAndUpdate(_id, updFlower, {new:true})
    res.json(updatedFlower);

}