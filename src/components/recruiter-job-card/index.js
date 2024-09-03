"use client";
import { useState } from "react";
import CommonCard from "../common-job-card";
import { Button } from "../ui/button";
import { Job } from "@/model/job";
import JobApplicant from "../job-applicant";

export default function RecruiterJobs({
  jobItem,
  ProfileInfo,
  jobApplication,
}) {
  const [currentCandidateData, setCurrentCandidateData] = useState(null);
  const [showCandidateDrawer, setShowDrawerValue] = useState(false);
  const [
    showCurrentCandidateDataModel,
    setCurrentCandidateDataModel,
  ] = useState(false);

  return (
    <div>
      <CommonCard
        title={jobItem?.jobtitle}
        applicant={
          <Button
            disabled={
              jobApplication.filter((item) => item.jobId === jobItem?._id)
                .length > 0
                ? false
                : true
            }
            className="disabled-opacity-200"
            onClick={() => setShowDrawerValue(true)}
          >
            {
              jobApplication.filter((item) => item.jobId === jobItem?._id)
                .length
            }{" "}
            Applicant
          </Button>
        }
      />
      <JobApplicant
        currentCandidateData={currentCandidateData}
        setCurrentCandidateData={setCurrentCandidateData}
        showCandidateDrawer={showCandidateDrawer}
        setShowDrawerValue={setShowDrawerValue}
        showCurrentCandidateDataModel={showCurrentCandidateDataModel}
        setCurrentCandidateDataModel={setCurrentCandidateDataModel}
        jobApplication={jobApplication.filter(
          (item) => item.jobId === jobItem?._id
        )}
        jobItem={jobItem}
      ></JobApplicant>
    </div>
  );
}
