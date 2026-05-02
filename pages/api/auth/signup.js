import connectDB from "../../../database/connection";
import Users from "../../../model/Schema";
import { hash } from "bcryptjs";

const handler = async (req, res) => {
  try {
    await connectDB();
  } catch (error) {
    return res.status(500).json({ error: "Database Connection Failed" });
  }

  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ message: "Don't have form data" });
    const { fullname, email, username, password, role } = req.body;

    const checkExisting = await Users.findOne({ email });
    if (checkExisting)
      return res.status(422).json({ message: "User Already Registered" });

    const user = await Users.create({
      fullname,
      email,
      username,
      password: await hash(password, 12),
      role,
    });

    return res.status(201).json({
      status: true,
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        username: user.username,
        role: user.role,
      },
    });
  } else {
    res.status(500).json({ message: "HTTP method not valid" });
  }
};
export default handler;
