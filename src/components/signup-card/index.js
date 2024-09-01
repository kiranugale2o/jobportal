"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const initialSignUpData = {
  email: "",
  password: "",
};

export default function SignUPCard() {
  const [currentSignUpData, setCurrentSignUpData] = useState(initialSignUpData);
  console.log(currentSignUpData);

  function handleButtonDisabled() {
    if (
      currentSignUpData.email.trim() === "" ||
      currentSignUpData.password.trim() === ""
    ) {
      return true;
    } else {
      return false;
    }
  }

  const router = useRouter();

  async function handleSignUp() {
    fetch("/api/sign-up", {
      method: "POST",
      body: JSON.stringify(currentSignUpData),
    }).then((res) => {
      res.json().then((res) => {
        if (res.success) {
          alert(res.message);
          sessionStorage.setItem("email", res.email);
          router.push("/sign-up/verification-of-email");
        } else {
          alert(res.message);
        }
      });
    });
  }
  return (
    <>
      <Card className="mt-10 w-[350px] mx-auto lg:mt-auto shadow flex flex-col lg:w-[400px] item-center">
        <CardHeader className="p-6  ml-auto mr-auto mt-auto">
          <CardTitle className="text-[22px] mx-auto">
            Create New Account
          </CardTitle>
          <CardDescription>
            Welcome to Jobportal ! Create your account .
          </CardDescription>
        </CardHeader>
        <CardContent className=" gap-y-1.5 ">
          <form className="" action={handleSignUp}>
            <Label>Email address</Label>
            <Input
              onChange={(e) => {
                setCurrentSignUpData({
                  ...currentSignUpData,
                  email: e.target.value,
                });
              }}
            />
            <br />
            <Label>Password</Label>
            <Input
              onChange={(e) => {
                setCurrentSignUpData({
                  ...currentSignUpData,
                  password: e.target.value,
                });
              }}
            />
            <br />

            <Button
              disabled={handleButtonDisabled()}
              type="submit"
              className=" p-0 w-full disabled:opacity-50"
              //   variant="secondary"
            >
              Continue
            </Button>
          </form>
          <CardFooter className="mt-3">
            <p className="text">
              Already have an account ?
              <Link className="font-semibold" href="/sign-in">
                Sing in
              </Link>
            </p>
          </CardFooter>
        </CardContent>
      </Card>
    </>
  );
}
