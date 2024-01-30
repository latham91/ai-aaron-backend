import Post from "../db/models/post.js";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({ success: true, posts });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
};

export const createPost = async (req, res) => {
    const { name, prompt, image } = req.body;

    try {
        const imageUrl = await cloudinary.uploader.upload(image);
        const newPost = await Post.create({
            name,
            prompt,
            image: imageUrl.url,
        });

        console.log(newPost);

        res.status(201).json({ success: true, newPost });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
};
