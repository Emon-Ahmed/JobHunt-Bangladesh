import { Schema, models, model } from "mongoose";

const AppliedJobSchema = new Schema(
  {
    jobId: String,
    appliedCandidates: String,
  },
  {
    timestamps: true,
  }
);

const AppliedJob = models.AppliedJob || model("AppliedJob", AppliedJobSchema);

export default AppliedJob;
