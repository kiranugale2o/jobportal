import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema({
  recruiterId: String,
  name: String,
  email: String,
  candidateId: String,
  status: [],
  jobId: String,
  jobApplyDate: String,
});

mongoose.models = {};
const Applicant = mongoose.model("Applicant", applicantSchema);
export default Applicant;
