import UserModel from "../models/user.js";
import mongoose from 'mongoose'

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

export const updateUser = async (req, res) => {
    const {id:_id} = req.params;
    const updUser = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("No Cakes with this ID.");
    }

    const updatedUser = await UserModel.findByIdAndUpdate(_id, {...updUser, _id}, {new:true});
    res.json(updatedUser);
}

export const deleteUser = async (req, res) => {
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("No Cakes with this ID.");
    }

    await UserModel.findByIdAndDelete(id);
    res.json({message: 'User Deleted successfully.'});
}

export const getOneUser = async (req, res) => {
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("No Cakes with this ID.");
    }

    try {
        const user = await UserModel.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getByEmail = async (req, res) => {
    const {email} = req.params;

    try {
        const user = await UserModel.find({email: email});
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}