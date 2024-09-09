import {
  createFilterCategory,
  currentUser,
  fetchAlljobs,
  fetchCandidateApplication,
  fetchRecruiterApplication,
  fetchRecruiterjobs,
  fetchUser,
} from "@/actions";
import JobListPage from "@/components/jobList";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function JobPage({ searchParams }) {
  const user = await currentUser();
  const id = user?.userId;
  const ProfileUser = await fetchUser(user?.userId);

  if (!user) {
    redirect("/sign-in");
  } else {
    if (user && !ProfileUser?._id) {
      redirect("/onboard");
    }
  }
  let jobList =
    ProfileUser?.role === "candidate"
      ? await fetchAlljobs(searchParams)
      : await fetchRecruiterjobs(user?.userId);

  const getApplications =
    ProfileUser?.role === "candidate"
      ? await fetchCandidateApplication(ProfileUser?.userId)
      : await fetchRecruiterApplication(ProfileUser?.userId);

  const filterCategory = await createFilterCategory();
  return (
    <JobListPage
      ProfileUser={JSON.parse(JSON.stringify(ProfileUser))}
      user={user?.userId}
      jobList={jobList}
      jobApplication={getApplications}
      filterCategory={filterCategory}
    />
  );
}
