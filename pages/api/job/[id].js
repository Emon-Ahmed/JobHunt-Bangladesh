import connection from "../../../database/connection";
import JobModel from "../../../model/JobSchema";

export default async function deleteItem(req, res) {
  const { id } = req.query;
  const { method } = req;

  await connection();

  switch (method) {
    case "GET":
      try {
        const users = await JobModel.findOne({_id: id});
        res.status(200).json(users);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedItem = await JobModel.findByIdAndDelete(id);
        res.status(200).json("Deleted", deletedItem);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting item" });
      }
      break;
    case "PUT":
      try {
        const user = await JobModel.findByIdAndUpdate(req.query.id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!user) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      break;
  }
}
