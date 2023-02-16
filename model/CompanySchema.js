import { Schema, model, models } from "mongoose";

const CompanySchema = new Schema(
  {
    company_name: String,
    company_tagline: String,
    company_description: String,
    company_industry: String,
    company_location: String,
    company_icon: String,
    company_cover: String,
    company_age: String,
    company_size: String,
    company_meta_data: String,
  },
  {
    timestamps: true,
  }
);

const Company = models.company || model("company", CompanySchema);

export default Company;
