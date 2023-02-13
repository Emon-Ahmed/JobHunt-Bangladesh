import connection from "./../../../database/connection";
import JobModel from "./../../../model/JobSchema";

export default async function handler(req, res) {
  const { method } = req;

  await connection();

  switch (method) {
    case "GET":
      try {
        const users = await JobModel.find({});
        res.status(200).json(users);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const user = await JobModel.create(req.body);
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
