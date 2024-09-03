import DatabaseConn from "@/database";
import { Job } from "@/model/job";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await DatabaseConn();
    const { data, repath } = await req.json();
    const job = await Job.create(data);
    await job.save();
    if (job) {
      return NextResponse.json({
        success: true,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: error.message,
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
