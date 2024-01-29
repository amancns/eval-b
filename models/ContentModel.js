import mongoose from "mongoose";

export const Content = mongoose.model(
  "Content",
  new mongoose.Schema({
    title: { type: String, required: true, minlength: 3, maxlength: 100 },
    description: {
      type: String,
      required: true,
    },
    mockFileLink: {
      type: String,
      required: true
    },
    category: { type: String, required: true },
    difficultyLevel: {
      type: String
    },
    targetAudience: { type: String},
    date: {type: Date}
  }),
  "Content"
);
