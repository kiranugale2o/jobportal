import SignInCard from "@/components/signin-card";
import { redirect } from "next/navigation";

export default async function SignIn() {
  return (
    <>
      <div className="p-auto lg:p-24">
        <SignInCard />
      </div>
    </>
  );
}
