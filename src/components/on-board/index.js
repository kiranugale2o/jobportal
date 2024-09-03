"use client";
import { useEffect, useState } from "react";
import CommonForm from "../common-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  CandidateRequireField,
  initialCandidateData,
  initialRecruterData,
  recruiterFromfield,
} from "@/utils";
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

export default function Onboard({ user, email }) {
  const router = useRouter();
  const [currentCandidateData, setCandidateData] = useState(
    initialCandidateData
  );
  const [tabButton, setButton] = useState("candidate");
  const [currentrecruiterData, setRecruterData] = useState(initialRecruterData);
  const [file, setFile] = useState(null);

  function handleFileChange(event) {
    event.preventDefault();
    setFile(event.target.files[0]);
    console.log(file);
  }

  async function handleFileUploadToSupabase() {
    if (!supabaseClient || !file) return;

    const { data, error } = await supabaseClient.storage
      .from("jobportal2")
      .upload(`/public/${file.name}`, file, {
        cacheControl: "3600",
        upsert: false,
      });

    console.log(data, error);

    if (data) {
      setCandidateData({
        ...currentCandidateData,
        resume: data.path,
      });
    }
  }

  useEffect(() => {
    if (file !== null) handleFileUploadToSupabase();
  }, [file]);

  async function CreateProfile() {
    const formdata = {
      userId: user,
      email: email,
      role: "recruiter",
      recruiter: currentrecruiterData,
      isPrimiumUser: false,
    };

    const recruiterData = {
      formdata: formdata,
      revalidatepath: "/onboard",
    };

    const candidateData = {
      userId: user,
      email: email,
      role: "candidate",
      candidate: currentCandidateData,
      isPrimiumUser: false,
    };

    const PostCandidateData = {
      formdata: candidateData,
      revalidatepath: "/onboard",
    };

    const profileData =
      tabButton === "recruiter" ? recruiterData : PostCandidateData;

    fetch("/api/createprofile", {
      method: "POST",
      body: JSON.stringify(profileData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        router.refresh();
      })
      .catch((er) => {
        console.log(er);
      });
  }

  return (
    <Tabs value={tabButton} onValueChange={setButton}>
      <div className="flex w-full justify-between p-0 lg:p-20">
        <div className="w-full ">
          <div className="block grid gap-4 grid-row-2 lg:flex flex-row justify-between border-b-4 p-10 lg:p-10 ">
            <h1 className="text-3xl font-bold">Welcome to Onboarding</h1>
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="candidate">Candidate</TabsTrigger>
              <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="candidate">
            <CommonForm
              formData={CandidateRequireField}
              currentData={currentCandidateData}
              setData={setCandidateData}
              buttonText={"Onboard As Candidate"}
              buttonAction={CreateProfile}
              handleFileChange={handleFileChange}
            />
          </TabsContent>
          <TabsContent value="recruiter">
            <CommonForm
              formData={recruiterFromfield}
              currentData={currentrecruiterData}
              setData={setRecruterData}
              buttonText={"Onboard As Recruiter"}
              buttonAction={CreateProfile}
            />
          </TabsContent>
        </div>
      </div>
    </Tabs>
  );
}
