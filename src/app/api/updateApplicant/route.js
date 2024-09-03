import DatabaseConn from "@/database";
import Applicant from "@/model/application";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    await DatabaseConn();
    const { jobApplicantUpdated, path } = await req.json();

    const {
      _id,
      recruiterId,
      name,
      email,
      candidateId,
      status,
      jobId,
      jobApplyDate,
    } = jobApplicantUpdated;

    const updateApplicant = await Applicant.findByIdAndUpdate(
      { _id: _id },
      {
        recruiterId,
        name,
        email,
        candidateId,
        status,
        jobId,
        jobApplyDate,
      },
      { new: true }
    );

    if (updateApplicant) {
      revalidatePath(path);
      return NextResponse.json({
        success: true,
      });
    } else {
      return NextResponse.json({
        success: false,
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
