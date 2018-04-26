import mongoose, { Schema } from 'mongoose';

const Record = new Schema({
  timestamp: String,
  type: String
})

export default mongoose.model('Record', Record);