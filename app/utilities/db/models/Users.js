import mongoose from "mongoose";
import { Schema } from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "user" },
  },
  { timestamps: true }
);

const Users = mongoose.models.Users || mongoose.model("Users", usersSchema);
export default Users;
