import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    fullname: String,
    email: String,
    username: String,
    password: String,
    role: String,
  },
  {
    timestamps: true,
  }
);

const Users = models.user || model("user", userSchema);

export default Users;
