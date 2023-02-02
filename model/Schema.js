import { Schema, model, models, createConnection } from "mongoose";

const userSchema = new Schema({
  fullname: String,
  email: String,
  username: String,
  password: String,
  role: String,
});

const Users = models.user || model("user", userSchema);

export default Users;
