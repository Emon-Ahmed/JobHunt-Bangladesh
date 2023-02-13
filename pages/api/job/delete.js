// pages/api/items/[id].js
import connection from './../../../database/connection';
import JobModel from './../../../model/JobSchema';

export default async function deleteItem(req, res) {
  const { id } = req.query;

  await connection();

  try {
    const deletedItem = await JobModel.findByIdAndDelete(id);
    res.status(200).json(deletedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting item' });
  }
}
