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

const initialSignInData = {
  email: "",
  password: "",
};

export default function SignInCard() {
  const [currentSignInData, setCurrentSignInData] = useState(initialSignInData);

  function handleButtonDisabled() {
    if (
      currentSignInData.email.trim() === "" ||
      currentSignInData.password.trim() === ""
    ) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
      <Card className="mt-10 w-[350px] mx-auto lg:mt-auto shadow flex flex-col lg:w-[400px] item-center">
        <CardHeader className="p-6  ml-auto mr-auto mt-auto">
          <CardTitle className="text-[22px] mx-auto">
            Sign into Jobportal
          </CardTitle>
          <CardDescription>
            Welcome to Jobportal ! Sign in your Account .
          </CardDescription>
        </CardHeader>
        <CardContent className=" gap-y-1.5 ">
          <form className="">
            <Label>Email address</Label>
            <Input
              onChange={(e) => {
                setCurrentSignInData({
                  ...currentSignInData,
                  email: e.target.value,
                });
              }}
            />
            <br />
            <Label>Password</Label>
            <Input
              onChange={(e) => {
                setCurrentSignInData({
                  ...currentSignInData,
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
              Sign in
            </Button>
          </form>
          <CardFooter className="mt-3">
            <p className="text">
              Don't have an account ?
              <Link className="font-semibold" href="/sign-up">
                Sing up
              </Link>
            </p>
          </CardFooter>
        </CardContent>
      </Card>
    </>
  );
}
