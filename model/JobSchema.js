import { Schema, model, models } from "mongoose";

const JobSchema = new Schema(
  {
    job_title: String,
    description: String,
    industry: String,
    job_level: String,
    Salary: String,
    Experience: String,
    job_type: String,
    Location: String,
    file: String,
    company: String,
    startDate: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Jobs = models.job || model("job", JobSchema);

export default Jobs;
