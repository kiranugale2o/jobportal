import DatabaseConn from "@/database";
import ProfileUser from "@/model/profile";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  await DatabaseConn();
  try {
    const { formdata, revalidatepath } = await req.json();
    const profile = await ProfileUser(formdata);
    await profile.save();
    if (profile) {
      revalidatePath(revalidatepath);
      return NextResponse.json({
        success: true,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went Wrong !",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
