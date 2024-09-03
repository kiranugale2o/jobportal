"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { fetchCandidateDetails } from "@/actions";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

// Supabase client initialization inside a useEffect or conditionally on client-side
let supabaseClient;

if (typeof window !== "undefined") {
  supabaseClient = createClient(
    "https://ckqjsyckwjnwzbgumxom.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrcWpzeWNrd2pud3piZ3VteG9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3ODAyOTAsImV4cCI6MjAzOTM1NjI5MH0.LnE-VUYVP_xQNyIEaHSbO6txRTSjVZSklpYZlJA9qQU"
  );
}

export default function CandidateList({
  currentCandidateData,
  setCurrentCandidateData,
  showCurrentCandidateDataModel,
  setCurrentCandidateDataModel,
  jobApplication,
}) {
  const router = useRouter();
  async function handleViewProfile(candidateId) {
    const url = `/api/getCandidateDetailsById?id=${encodeURIComponent(
      candidateId
    )}`;

    fetch(url, {
      method: "GET",
    }).then((res) => {
      res.json().then((res) => {
        setCurrentCandidateDataModel(true);
        setCurrentCandidateData(res.data);
      });
    });
  }

  async function handlePreviewResume(resume) {
    // g(resume);

    const { data } = supabaseClient.storage
      .from("jobportal2")
      .getPublicUrl(currentCandidateData?.candidate?.resume);

    const a = document.createElement("a");
    a.href = data?.publicUrl;
    a.setAttribute("download", "Resume.pdf");
    a.setAttribute("target", "_blank");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  async function handleUpdateApplicant(getStatus) {
    let cpyJobApplication = [...jobApplication];

    const indexOfJobApplicant = cpyJobApplication.findIndex(
      (item) => item.candidateId === currentCandidateData.userId
    );
    const jobApplicantUpdated = {
      ...cpyJobApplication[indexOfJobApplicant],
      status: cpyJobApplication[indexOfJobApplicant].status.concat(getStatus),
    };

    fetch("/api/updateApplicant", {
      method: "PUT",
      body: JSON.stringify({
        jobApplicantUpdated: jobApplicantUpdated,
        path: "/jobs",
      }),
    }).then((res) => {
      router.refresh();
    });
  }
  return (
    <div>
      <h1 className="text-2xl p-5">Job Applicant</h1>
      <div className="block w-full  lg:flex lg:flex-wrap w-full p-9 item-center grid gap-4 grid-row-2 ">
        {jobApplication && jobApplication.length > 0
          ? jobApplication.map((d) => {
              return (
                <div className="bg-green-100 flex flex-row w-[300px] lg:w-[350px] h-[80px]  lg:ml-10 justify-between rounded-lg shadow-md ">
                  <h1 className=" text-[20px] font-semibold mt-4 ml-4  ">
                    {d.name}
                  </h1>
                  <Button
                    onClick={() => handleViewProfile(d.candidateId)}
                    className="mr-5 p-5 mt-5"
                  >
                    View Profile
                  </Button>
                </div>
              );
            })
          : null}
      </div>
      <Dialog
        className="w-full bg-green-100"
        open={showCurrentCandidateDataModel}
        onOpenChange={setCurrentCandidateDataModel}
      >
        <DialogContent className="w-full bg-green-200">
          <DialogHeader>
            <DialogTitle>
              <div className="text-xl font-semibold">
                {currentCandidateData?.candidate?.name}
                {"  ,  "}
                {currentCandidateData?.candidate?.email}
              </div>
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="justify-between">
            <div className=" text-[18px] text-black font-semibold">
              {"Previous Company : "}
              {currentCandidateData?.candidate?.company}
            </div>
            <div className="text-[16px] text-neutral-950 mt-3">
              {" "}
              {currentCandidateData?.candidate?.joblocation}
            </div>
            <div className="text-[16px] text-neutral-950 ">
              {"Total Experience : "}
              {currentCandidateData?.candidate?.experience} years
            </div>
            <div className="text-[16px] text-neutral-950">
              {"Current Salary: "}
              {currentCandidateData?.candidate?.csalary} LPA
            </div>
            <div className="text-[16px] text-neutral-950">
              {"Education : "}
              {currentCandidateData?.candidate?.degree}
            </div>
          </DialogDescription>
          <DialogFooter className="block">
            <div className="flex flex-wrap ml-1 gap-3">
              {currentCandidateData?.candidate?.skill.split(",").map((d) => {
                return (
                  <div className="text-[13px]  rounded-lg p-2.5 text-white bg-black">
                    {d}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap mt-5 gap-4">
              <Button
                onClick={() =>
                  handlePreviewResume(currentCandidateData?.candidate?.resume)
                }
              >
                Resume
              </Button>
              <Button
                onClick={() => {
                  handleUpdateApplicant("selected");
                }}
                disabled={
                  jobApplication
                    .find(
                      (item) =>
                        item.candidateId === currentCandidateData?.userId
                    )
                    ?.status?.includes("selected") ||
                  jobApplication
                    .find(
                      (item) =>
                        item.candidateId === currentCandidateData?.userId
                    )
                    ?.status?.includes("rejected")
                }
              >
                {jobApplication
                  .find(
                    (item) => item.candidateId === currentCandidateData?.userId
                  )
                  ?.status?.includes("selected")
                  ? "Selected"
                  : "Select"}
              </Button>
              <Button
                onClick={() => {
                  handleUpdateApplicant("rejected");
                }}
                disabled={
                  jobApplication
                    .find(
                      (item) =>
                        item.candidateId === currentCandidateData?.userId
                    )
                    ?.status?.includes("rejected") ||
                  jobApplication
                    .find(
                      (item) =>
                        item.candidateId === currentCandidateData?.userId
                    )
                    ?.status?.includes("selected")
                }
              >
                {jobApplication
                  .find(
                    (item) => item.candidateId === currentCandidateData?.userId
                  )
                  ?.status?.includes("rejected")
                  ? "Rejected"
                  : "Reject"}
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
