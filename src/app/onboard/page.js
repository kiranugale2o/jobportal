import { currentUser, fetchUser } from "@/actions";
import Onboard from "@/components/on-board";
import { redirect } from "next/navigation";

export default async function OnboardPage() {
  const users = await currentUser();
  const email = users?.email;

  if (!users) redirect("/sign-in");
  const user = users?.userId;

  const ProfileUser = await fetchUser(users?.userId);

  if (ProfileUser?._id) {
    if (ProfileUser?.role === "recruiter" && !ProfileUser?.isPrimiumUser)
      redirect("/membership");
    else redirect("/");
  } else {
    return <Onboard user={user} email={email} />;
  }
}
