import { currentUser } from "@/actions";
import SignUPCard from "@/components/signup-card";
import { redirect } from "next/navigation";

export default async function SignUp() {
  const user = await currentUser();
  if (user) redirect("/");
  return (
    <>
      <div className="p-auto lg:p-20">
        <SignUPCard />
      </div>
    </>
  );
}
