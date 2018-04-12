import mongoose, { Schema } from 'mongoose';

const Scheme = mongoose.Schema;

export const RugSchema = new Schema({
    rugName: {
        type: String,
        required: 'Enter rug name'
    },
    rugPrice: {
        type: Number,
        required: 'Enter rugjjjjj price'
    },
  
    rugDescr: {
        type: String
    },
    rugImgURL: {
        type: String
    }

}, { timestamps: true });
