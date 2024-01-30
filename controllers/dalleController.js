import { OpenAI } from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const createImage = async (req, res) => {
    const { prompt } = req.body;
    console.log(prompt);

    try {
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt,
            n: 1,
            size: "1024x1024",
            response_format: "b64_json",
        });

        const image = response.data[0].b64_json;

        res.status(200).json({ image });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
