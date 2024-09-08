import { currentUser, fetchUser } from "@/actions";
import AccountCard from "@/components/Account-Page";
import { redirect } from "next/navigation";

export default async function Account() {
  const user = await currentUser();
  const ProfileInfo = await fetchUser(user?.userId);
  if (!ProfileInfo?._id) redirect("/onboard");
  return (
    <>
      <AccountCard ProfileInfo={ProfileInfo} />
    </>
  );
}
