import SignUPCard from "@/components/signup-card";
import { redirect } from "next/navigation";

export default async function SignUp() {
  return (
    <>
      <div className="p-auto lg:p-24">
        <SignUPCard />
      </div>
    </>
  );
}
