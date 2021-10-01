import mongoose from "mongoose";

const NewsLetterSchema = mongoose.Schema({
    email: String,
    date: {
        type: Date,
        default: new Date()
    }
});

const NewsLetterModel = mongoose.model("newsletter", NewsLetterSchema);
export default NewsLetterModel;