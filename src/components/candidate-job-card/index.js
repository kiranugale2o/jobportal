"use client";
import { useEffect, useState } from "react";
import CommonCard from "../common-job-card";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
} from "../ui/drawer";
import { CreateApplicant } from "@/actions";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CandidateJobs({
  jobItem,
  ProfileInfo,
  jobApplication,
}) {
  const [showDrawerValue, setShowDrawerValue] = useState(false);
  const router = useRouter();
  function handleApplicant() {
    const data = {
      recruiterId: jobItem?.recruiterId,
      name: ProfileInfo?.candidate?.name,
      email: ProfileInfo?.candidate?.email,
      candidateId: ProfileInfo?.userId,
      status: ["Applied"],
      jobId: jobItem?._id,
      jobApplyDate: new Date().toLocaleDateString(),
    };

    const formdata = {
      data: data,
      path: "/jobs",
    };
    fetch("/api/createapplicant", {
      method: "POST",
      body: JSON.stringify(formdata),
    })
      .then((res) => {
        res.json().then((res) => {
          if (res.success) {
            setShowDrawerValue(false);
            router.refresh();
          }
        });
      })
      .catch((res) => {
        console.log(res);
      });
  }

  return (
    <>
      <div>
        <Drawer open={showDrawerValue} onOpenChange={setShowDrawerValue}>
          <CommonCard
            title={jobItem?.jobtitle}
            company={jobItem?.companyName}
            jobtype={jobItem?.jobtype}
            days={jobItem?.postDate}
            applicant={
              <Button
                onClick={() => {
                  setShowDrawerValue(true);
                }}
              >
                View Details
              </Button>
            }
          />
          <DrawerContent className="flex w-full item-center">
            <DrawerHeader className="flex flex-row w-full justify-between item-center ">
              <h1 className="text-2xl lg:text-4xl font-bold ml-5 ">
                {jobItem?.jobtitle}
              </h1>
              <div className="gap-5 flex ">
                <Button
                  className="disabled:opacity:50"
                  onClick={() => {
                    handleApplicant();
                  }}
                  disabled={
                    jobApplication.findIndex(
                      (item) => item.jobId === jobItem._id
                    ) > -1
                      ? true
                      : false
                  }
                >
                  {jobApplication.findIndex(
                    (item) => item.jobId === jobItem._id
                  ) > -1
                    ? "Applied"
                    : "Apply"}
                </Button>
                <Button
                  onClick={() => {
                    setShowDrawerValue(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </DrawerHeader>
            <DrawerDescription>
              <div className="text-xl  ml-10 bg-color-gray-100">
                {jobItem?.jobdescription}
                <span className="ml-5">{jobItem?.joblocation}</span>
              </div>

              <Button
                variant="secondary"
                className="w-[150px] mt-5 ml-5 text-[20px]"
              >
                {jobItem.jobtype}
              </Button>
            </DrawerDescription>

            <div className="flex ml-10 mt-5 text-xl ">
              Experience: {jobItem?.experience}
            </div>
            <div className="flex flex-wrap  ml-10 gap-4 h-[80px] mt-5 ">
              {jobItem?.skill.split(",").map((d) => {
                return <Button variant="secondary">{d}</Button>;
              })}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
