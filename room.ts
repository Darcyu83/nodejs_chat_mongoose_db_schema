import mongoose, { Schema } from "mongoose";
// 내용 업데이트

const roomSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  max: {
    type: Number,
    required: true,
    default: 10,
    min: 2,
  },
  owner: {
    type: String,
    required: true,
  },
  password: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default roomSchema;
