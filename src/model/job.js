import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  companyName: String,
  jobtitle: String,
  joblocation: String,
  jobdescription: String,
  skill: String,
  experience: String,
  jobtype: String,
  recruiterId: String,
  postDate: String,
  applicants: [
    {
      name: String,
      email: String,
      userId: String,
      status: String,
    },
  ],
});

mongoose.models = {};

export const Job = mongoose.model("Job", jobSchema);
