import FeedbackModel from "../models/feedback.js";

export const getAllFeedbacks = async (req, res) => {
    try {
        const feedbackData = await FeedbackModel.find();
        res.status(200).json(feedbackData);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const addFeedback = async (req, res) => {
    const feedback = req.body;
    const newFeedback = new FeedbackModel(feedback);
    
    try {
        await newFeedback.save()
        res.status(201).json(newFeedback);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}