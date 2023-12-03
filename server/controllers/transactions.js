import TransactionModel from "../models/transactions.js";

export const getAllTransactions = async (req, res) => {
    try {
        const transactionData = await TransactionModel.find();
        res.status(200).json(transactionData);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const addTransaction = async (req, res) => {
    const transaction = req.body;
    const newtransaction = new TransactionModel(transaction);
    
    try {
        await newtransaction.save()
        res.status(201).json(newtransaction);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

