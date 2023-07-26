import mongoose from "mongoose";

const schema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

export default mongoose.model("User", schema);
