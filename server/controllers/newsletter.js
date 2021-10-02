import NewsLetterModel from "../models/newsletter.js";

export const getAllNewsLetters = async (req, res) => {
    try {
        const newsLetterData = await NewsLetterModel.find();
        res.status(200).json(newsLetterData);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const addNewsLetter = async (req, res) => {
    const newsLetter = req.body;
    const newNewsLetter = new NewsLetterModel(newsLetter);
    
    try {
        await newNewsLetter.save()
        res.status(201).json(newNewsLetter);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}