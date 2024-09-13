import { currentUser } from "@/actions";
import SignInCard from "@/components/signin-card";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const user = await currentUser();
  console.log(user);

  if (user) redirect("/");
  return (
    <>
      <div className="p-auto lg:p-24">
        <SignInCard />
      </div>
    </>
  );
}
