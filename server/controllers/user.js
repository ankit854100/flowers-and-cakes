import UserModel from "../models/user.js";

export const getAllUsers = async (req,res) => {
    try {
        const userData = await UserModel.find();
        res.status(200).json(userData);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const addUser = async (req,res) => {
    const user = req.body;
    const newuser = new UserModel(user);

    try {
        await newuser.save();
        res.status(201).json(newuser);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}