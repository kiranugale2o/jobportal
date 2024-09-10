"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useEffect } from "react";

export default function HomePageButton({ user, ProfileUser }) {
  const router = useRouter();
  useEffect(() => {
    router.refresh("/");
  }, []);

  return (
    <>
      <div className="flex mt-7 gap-4">
        <Button onClick={() => router.push("/jobs")}>
          {user
            ? ProfileUser?.role === "candidate"
              ? "Browes A Jobs "
              : "Job Dashboard"
            : "Find jobs"}
        </Button>
        <Button
          onClick={() =>
            router.push(
              user
                ? ProfileUser?.role === "candidate"
                  ? "/activity"
                  : "/jobs"
                : "/jobs"
            )
          }
        >
          {user
            ? ProfileUser?.role === "candidate"
              ? "Your activity"
              : "Post jobs"
            : "Post a Job"}
        </Button>
      </div>
    </>
  );
}
