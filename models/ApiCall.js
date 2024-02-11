
import mongoose from "mongoose";

const ApiCall = mongoose.model(
  "ApiCall",
  new mongoose.Schema({
    count: { type: Number, default: 1 },
  }),
  "ApiCall"
);
ApiCall;

export default ApiCall;
