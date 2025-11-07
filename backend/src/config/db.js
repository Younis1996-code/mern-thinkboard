import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongo connected")
    } catch (error) {
        console.log("connect failed", error)
        process.exit(1)
    }
}


// ZPwaS46UzR7AbtWW
// younisissa205_db_user

// mongodb+srv://younisissa205_db_user:ZPwaS46UzR7AbtWW@cluster1234.tkamui9.mongodb.net/?appName=Cluster1234