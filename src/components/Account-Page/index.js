"use client";

import { useEffect, useState } from "react";
import CommonForm from "../common-form";
import { CandidateRequireField, recruiterFromfield } from "@/utils";
import { UpdateProfile } from "@/actions";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AccountCard({ ProfileInfo }) {
  console.log(ProfileInfo);
  const [currentUserData, setCurrentUserData] = useState();

  useEffect(() => {
    if (ProfileInfo?.role === "candidate") {
      setCurrentUserData(ProfileInfo?.candidate);
    }
    if (ProfileInfo?.role === "recruiter") {
      setCurrentUserData(ProfileInfo?.recruiter);
    }
  }, [ProfileInfo]);

  const router = useRouter();
  async function handleUpdateProfile() {
    const data =
      ProfileInfo?.role === "candidate"
        ? {
            userId: ProfileInfo.userId,
            role: ProfileInfo.role,
            isPrimiumUser: ProfileInfo.isPrimiumUser,
            memberShipStartDate: ProfileInfo.memberShipStartDate,
            memberShipEndDate: ProfileInfo.memberShipEndDate,
            email: ProfileInfo.email,
            _id: ProfileInfo._id,

            candidate: {
              ...currentUserData,
              resume: ProfileInfo?.candidate?.resume,
            },
          }
        : {
            userId: ProfileInfo.userId,
            role: ProfileInfo.role,
            isPrimiumUser: ProfileInfo.isPrimiumUser,
            memberShipStartDate: ProfileInfo.memberShipStartDate,
            memberShipEndDate: ProfileInfo.memberShipEndDate,
            email: ProfileInfo.email,
            _id: ProfileInfo._id,
            recruiter: {
              ...currentUserData,
            },
          };

    await UpdateProfile(data);
    toast.success("Profile Updated");
    router.refresh("/account");
  }

  return (
    <>
      <div className="flex flex-col max-auto w-full lg:w-7/9 lg:p-20 ">
        <div className="flex w-full border-b p-5">
          <h1 className="text-3xl font-semibold ">My Profile</h1>
        </div>
        <CommonForm
          formData={
            ProfileInfo?.role === "candidate"
              ? CandidateRequireField.filter((item) => item.label !== "resume")
              : recruiterFromfield
          }
          currentData={currentUserData}
          setData={setCurrentUserData}
          buttonAction={handleUpdateProfile}
          buttonText={"Update Profile"}
        ></CommonForm>
      </div>
      <ToastContainer />
    </>
  );
}
