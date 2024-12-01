import mongoose from "mongoose";

export default async function main() {
  try {
    mongoose.set('strictQuery', true);
    
    await mongoose.connect("STRING_CONNETION_MONGODB");

    console.log('Connected to MongoDB!');
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}