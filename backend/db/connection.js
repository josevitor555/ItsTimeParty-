import mongoose from "mongoose";

export default async function main() {
  try {
    mongoose.set('strictQuery', true);
    
    await mongoose.connect("mongodb+srv://josevitordesousa123:I1Usr8VlFwLJn8mE@cluster0.hogjt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    console.log('Connected to MongoDB!');
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}