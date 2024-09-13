"use server";
import DatabaseConn from "@/database";
import Applicant from "@/model/application";
import { Job } from "@/model/job";

import { revalidatePath } from "next/cache";
import { parse } from "cookie";
import { headers } from "next/headers";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import cookie from "cookie";
import ProfileUser from "@/model/profile";

//fetch Current User is exit or not
export async function currentUser() {
  const headersList = headers();
  const cookieHeader = headersList.get("cookie") || "";
  // Parse cookies
  const cookies = parse(cookieHeader);

  // Deserialize the object
  const myObject = cookies["jobportal_token"];

  if (myObject) {
    return jwt.verify(
      myObject,
      process.env.TOKEN_SECRET_KEY,
      (err, decoded) => {
        if (err) {
          // Token is invalid or expired
          console.log(err);
          return null;
        }
        // Token is valid
        return decoded;
      }
    );
  }
}
//fetch exiting user data and return
export async function fetchUser(id) {
  await DatabaseConn();
  const data = await ProfileUser.findOne({ userId: id });
  if (data) {
    return JSON.parse(JSON.stringify(data));
  } else {
    return null;
  }
}

//recruiter Job fetching
export async function fetchRecruiterjobs(id) {
  const jobs = await Job.find({
    recruiterId: id,
  });
  return jobs;
}

//fetching all jobs
export async function fetchAlljobs(filterParams = {}) {
  await DatabaseConn();
  let updateParams = {};
  Object.keys(filterParams).forEach((filterKey) => {
    updateParams[filterKey] = { $in: filterParams[filterKey].split(",") };
  });

  const jobs = await Job.find(
    filterParams && Object.keys(filterParams).length > 0 ? updateParams : {}
  );

  return JSON.parse(JSON.stringify(jobs));
}

//fetch candidate application
export async function fetchCandidateApplication(candidateId) {
  await DatabaseConn();
  const applicant = await Applicant.find({
    candidateId: candidateId,
  });

  return JSON.parse(JSON.stringify(applicant));
}

export async function fetchRecruiterApplication(RecruiterId) {
  await DatabaseConn();
  const applicant = await Applicant.find({
    recruiterId: RecruiterId,
  });

  return JSON.parse(JSON.stringify(applicant));
}

//filter job

export async function createFilterCategory() {
  await DatabaseConn();
  const result = await Job.find({});
  return JSON.parse(JSON.stringify(result));
}

export async function UpdateProfile(data) {
  const {
    userId,
    role,
    isPrimiumUser,
    memberShipStartDate,
    memberShipEndDate,
    email,
    recruiter,
    candidate,
    _id,
  } = data;

  await ProfileUser.findByIdAndUpdate(
    { _id },
    {
      userId,
      role,
      isPrimiumUser,
      memberShipStartDate,
      memberShipEndDate,
      email,
      recruiter,
      candidate,
    },
    {
      new: true,
    }
  );
}
