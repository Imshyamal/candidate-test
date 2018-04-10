import mongoose, { Schema } from 'mongoose';

const Scheme = mongoose.Schema;

export const RugSchema = new Schema({
    rugName: {
        type: String,
        required: 'Enter rug name'
    },
    rugPrice: {
        type: Number,
        required: 'Enter rug price'
    },
  
    rugDescr: {
        type: String
    },
    rugImgURL: {
        type: String
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});
