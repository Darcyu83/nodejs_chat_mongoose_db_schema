import mongoose, { Schema } from "mongoose";

// made this folder submodule for central control
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
