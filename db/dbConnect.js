import mongoose from "mongoose";

const dbConnect = async () => {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
};

export default dbConnect;
