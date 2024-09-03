import DatabaseConn from "@/database";
import Applicant from "@/model/application";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await DatabaseConn();
    const { data, path } = await req.json();
    const applicant = await Applicant(data);
    await applicant.save();
    if (applicant) {
      revalidatePath("/jobs");

      return NextResponse.json({
        success: true,
        message: "Apply Successfully !",
        revalidatePath: true,
      });
    } else {
      revalidatePath("/jobs");
      return NextResponse.json({
        success: false,
        message: "Somthing went Wrong",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Somthing went Wrong",
    });
  }
}
