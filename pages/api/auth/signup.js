import connectDB from "../../../database/connection";
import Users from "../../../model/Schema";
import { hash } from "bcryptjs";

const handler = async (req, res) => {
  connectDB().catch((error) =>
    res.json({ error: "Database Connection Failed" })
  );

  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ message: "Don't have form data" });
    const { fullname, email, username, password, role } = req.body;

    const checkExisting = await Users.findOne({ email });
    if (checkExisting)
      return res.status(422).json("message: User Already Registered");
    Users.create(
      {
        fullname,
        email,
        username,
        password: await hash(password, 12),
        role
      },
      function (err, data) {
        if (err) return res.status(404).json({ err });
        res.status(201).json({ status: true, user: data });
      }
    );
  } else {
    res.status(500).json({ message: "HTTP method not valid" });
  }
};
export default handler;
