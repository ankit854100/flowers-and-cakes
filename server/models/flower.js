import mongoose from "mongoose";

const flowerSchema = mongoose.Schema({
    category: String,
    title: String,
    price: Number,
    quantity: Number,
    images: [String],
    productDetails: [String],
    reviews: {
        type: {
        rating: {
            type: Number,
            min: 1,
            max: 5 
        },
        text: String,
        user: String,
        date: Date},
        default: {}
    }
})

const FlowerModel = mongoose.model("flowerModel", flowerSchema);

export default FlowerModel;

