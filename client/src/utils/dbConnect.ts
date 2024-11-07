import mongoose from "mongoose";


const mongoURI = process.env.NEXT_PUBLIC_MONGO_URI;
async function dbConnect() {
  try {
    console.log(mongoURI)
    await mongoose.connect(mongoURI as string);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}


export default dbConnect;