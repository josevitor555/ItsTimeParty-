import mongoose from "mongoose";

const { Schema } = mongoose;

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  
  description: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  image: {
    type: String,
    required: true
  },
}, { timeseries: true });

export const Service = mongoose.model('Service', serviceSchema);
