import mongoose from "mongoose";

const FeedbackSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    post: String,
    date: {
        type: Date,
        default: new Date()
    }
});

const FeedbackModel = mongoose.model("feedbacks", FeedbackSchema);
export default FeedbackModel;