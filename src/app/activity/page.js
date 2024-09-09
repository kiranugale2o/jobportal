import {
  currentUser,
  fetchAlljobs,
  fetchCandidateApplication,
  fetchUser,
} from "@/actions";
import ActivityCard from "@/components/candidate-activity";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Activity() {
  const user = await currentUser();
  const id = user?.userId;
  const ProfileUser = await fetchUser(user?.userId);

  if (ProfileUser?.role !== "candidate") redirect("/");
  const jobList = await fetchAlljobs();
  const jobApplication = await fetchCandidateApplication(user?.userId);
  if (!user) {
    redirect("/sign-in");
  } else {
    if (user && !ProfileUser?._id) {
      redirect("/onboard");
    }
  }

  return (
    <ActivityCard
      jobList={jobList}
      jobApplication={jobApplication}
    ></ActivityCard>
  );
}
