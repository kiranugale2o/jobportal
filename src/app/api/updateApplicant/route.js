import DatabaseConn from "@/database";
import Applicant from "@/model/application";
import { Job } from "@/model/job";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});
export async function PUT(req) {
  try {
    await DatabaseConn();
    const { jobApplicantUpdated, path, jtype } = await req.json();

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

    //send Candidate Email if IS Selected
    if (jtype === "selected") {
      const jobDetails = await Job.findOne({ _id: jobId });
      console.log(jobDetails);

      await transporter.sendMail({
        to: email,
        subject: `Congratulations! You’ve Been Selected for the ${jobDetails.jobtitle} Position at ${jobDetails.companyName} `,
        html: `
           <div>
         
          <h4>Dear ${name},
            I am pleased to inform you that after careful consideration,
             we have selected you for the role of <b> ${jobDetails.jobtitle}</b> at <b>
             <u> ${jobDetails.companyName}</u>
             </b>.
               Your skills, experience, and enthusiasm stood out, 
               and we are excited to welcome you to our team.</h4>

               <h4>Check your Jobportal Account for other Information !</h4>
            <footer>thank you</footer>
          </div>`,
      });
    }

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
