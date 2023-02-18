import connect from "../../../database/connection";
import Schema from "../../../model/Schema";

const handler = async (req, res) => {
  const { method } = req;

  await connect();

  switch (method) {
    case "GET":
      try {
        const candidate = await Schema.find({});
        res.status(200).json(candidate);
      } catch {
        res.status(404).json({ status: false });
      }
      break;

    default:
      break;
  }
};

export default handler;
