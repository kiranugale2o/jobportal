import DatabaseConn from "@/database";
import ProfileUser from "@/model/profile";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  await DatabaseConn();
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const candidateId = url.searchParams.get("id");

    if (!candidateId) {
      return res.status(400).json({ error: "Candidate ID is required" });
    }
    const data = await ProfileUser.findOne({ userId: candidateId });

    if (data) {
      return NextResponse.json({
        success: true,
        data: JSON.parse(JSON.stringify(data)),
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Somthing wrong",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "somthing Wrong",
    });
  }
}
