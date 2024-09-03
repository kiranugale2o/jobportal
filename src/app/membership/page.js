import { currentUser, fetchUser } from "@/actions";
import { redirect } from "next/navigation";

export default async function Membership() {
  const user = await currentUser();
  const id = user?.userId;
  const ProfileUser = await fetchUser(user?.userId);
  if (!user || ProfileUser) redirect("/");
  return <div>Membership</div>;
}
