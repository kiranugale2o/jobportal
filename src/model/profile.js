import mongoose from "mongoose";

const ProfileUserSchema = new mongoose.Schema({
  userId: String,
  role: String,
  isPrimiumUser: Boolean,
  memberShipStartDate: String,
  memberShipEndDate: String,
  email: String,
  recruiter: {
    name: String,
    company: String,
    role: String,
  },
  candidate: {
    resume: String,
    name: String,
    email: String,
    company: String,
    joblocation: String,
    csalary: String,
    skill: String,
    experience: String,
    college: String,
    collegelocation: String,
    degree: String,
    graduationYear: String,
    linkedin: String,
    github: String,
  },
});

mongoose.models = {};

const ProfileUser = mongoose.model("ProfileUser", ProfileUserSchema);

export default ProfileUser;
