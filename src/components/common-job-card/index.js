"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export default function CommonCard({
  title,
  applicant,
  company,
  jobtype,
  days,
}) {
  const [day, setDays] = useState("");

  useEffect(() => {
    // Convert the stored date string to a Date object
    const storedDate = new Date(days);
    // Get today's date (in YYYY-MM-DD format for accurate comparison)
    const today = new Date(); // This gives the current date and time
    const todayFormatted = new Date(today.toISOString().split("T")[0]); // Remove time portion

    const timeDifference = todayFormatted - storedDate;

    // Convert the time difference from milliseconds to days
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    setDays(daysDifference);
  }, [1]);

  console.log(day);

  return (
    <>
      <Card className="w-30 shadow-md ">
        <CardHeader>
          <CardTitle className="flex justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-amd"
              viewBox="0 0 16 16"
            >
              <path
                d="m.334 0 4.358
               4.359h7.15v7.15l4.358 4.358V0zM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2z"
              />
            </svg>
            {jobtype ? (
              <div className="text-[15px] bg-gray-100 p-1 semibold text-black-100  ">
                {jobtype}
              </div>
            ) : null}
          </CardTitle>

          {title ? <CardTitle>{title}</CardTitle> : null}
          {company ? <CardDescription>{company}</CardDescription> : null}
          <CardDescription>
            <b>{day + 1} days</b>
          </CardDescription>
        </CardHeader>
        {applicant ? <CardFooter>{applicant}</CardFooter> : null}
      </Card>
    </>
  );
}
