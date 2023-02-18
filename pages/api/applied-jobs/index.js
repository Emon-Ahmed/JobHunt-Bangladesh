import connectDB from "./../../../database/connection";
import AppliedJobSchema from "../../../model/AppliedJobSchema";

const AppliedJobFun = async (req, res) => {
  const { method } = req;

  await connectDB();

  switch (method) {
    case "GET":
      try {
        const AppliedJob = AppliedJobSchema.find({});
        res.status(200).json(AppliedJob);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const AppliedJobPOST = await AppliedJobSchema.create(req.body);
        res.status(201).json({ success: true, data: AppliedJobPOST });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      break;
  }
};

export default AppliedJobFun;
