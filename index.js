import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import dbConnect from "./db/dbConnect.js";

dotenv.config();

import dalleRoutes from "./routes/dalleRoutes.js";
import postRoutes from "./routes/postRoutes.js";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json({ limit: "30mb" }));

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/create", dalleRoutes);

const startServer = async () => {
    try {
        dbConnect();

        app.listen(5001, () => {
            console.log("Server is running on port 5001");
        });
    } catch (error) {
        console.log(error);
    }
};

startServer();
