"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { initialJobData, jobFormFields } from "@/utils";

import { useRouter } from "next/navigation";
import CommonForm from "../common-form";

export default function PostJob({ ProfileUser, user }) {
  const [currentJobData, setCurrentJobData] = useState({
    ...initialJobData,
    companyName: ProfileUser?.recruiter?.company,
  });

  const [dialogbtn, setDialogbtn] = useState(false);
  const router = useRouter();
  async function createJob() {
    const data = { ...currentJobData, recruiterId: user, applicants: [] };
    const sdata = {
      data: data,
      repath: "/jobs",
    };
    const res = await fetch("/api/postjob", {
      method: "POST",
      body: JSON.stringify(sdata),
    });
    const result = await res.json();
    if (result.success) {
      setCurrentJobData({
        ...initialJobData,
        companyName: ProfileUser?.recruiter?.company,
      });
      setDialogbtn(false);
      router.refresh();
    }
  }
  return (
    <>
      <Button
        onClick={() => {
          setDialogbtn(true);
        }}
        className="flex item-center"
      >
        Post A Job
      </Button>
      <Dialog
        className="md:max-w-full"
        open={dialogbtn}
        onOpenChange={setDialogbtn}
      >
        <DialogContent className=" overflow-auto h-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl ">Post A Job</DialogTitle>
          </DialogHeader>

          <CommonForm
            formData={jobFormFields}
            currentData={currentJobData}
            setData={setCurrentJobData}
            buttonText={"Post"}
            buttonAction={createJob}
          ></CommonForm>
        </DialogContent>
      </Dialog>
    </>
  );
}
