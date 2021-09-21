import FlowerModel from "../models/flower.js"

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
