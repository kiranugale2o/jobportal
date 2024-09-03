import { currentUser, fetchUser } from "@/actions";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();
  console.log(user);
  const ProfileUser = await fetchUser(user?.userId);

  if (!user) {
    redirect("/sign-in");
  } else {
    if (user && !ProfileUser?._id) {
      redirect("/onboard");
    }
  }

  return <h1>home</h1>;
}
