import mongoose from "mongoose";

const TransactionSchema = mongoose.Schema({
    userId: String,
    type: String,
    title: String,
    category: String,
    cost: Number,
    quantity: Number,
    date: {
        type: Date,
        default: new Date()
    }
});

const TransactionModel = mongoose.model("transactions", TransactionSchema);
export default TransactionModel;