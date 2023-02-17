import connection from "./../../../database/connection";
import CompanyModel from "./../../../model/CompanySchema";

export default async function handler(req, res) {
  const { method } = req;

  await connection();

  switch (method) {
    case "GET":
      try {
        const users = await CompanyModel.find({});
        res.status(200).json(users);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const user = await CompanyModel.create(req.body);
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
