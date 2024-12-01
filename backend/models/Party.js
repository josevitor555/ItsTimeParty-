import mongoose from "mongoose";

const { Schema } = mongoose;

import { serviceShema } from './Service.js';

const partySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  
  author: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },
  
  budget: {
    type: Number,
    required: true
  },
  
  image: {
    type: Number,
    required: true
  },

  services: {
    type: [ serviceShema ]
  },
}, { timestamps: true });

const Party = mongoose.model('Party', partySchema);
export default Party;
