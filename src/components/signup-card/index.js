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
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { passwordChecker } from "@/utils";

const initialSignUpData = {
  email: "",
  password: "",
};

export default function SignUPCard() {
  const [passwordMsg, setPasswordMsg] = useState("");
  const [buttonDisabled, setButtonDis] = useState(true);
  const [passwordMsgColor, setPasswordMsgColor] = useState("");
  const [currentSignUpData, setCurrentSignUpData] = useState(initialSignUpData);

  useEffect(() => {
    if (
      currentSignUpData.email.trim() === "" ||
      currentSignUpData.password.trim() === "" ||
      passwordMsgColor === "red-600"
    ) {
      setButtonDis(true);
    } else {
      setButtonDis(false);
    }
  });

  const router = useRouter();
  //signIn handle function call api
  function handleSignUp() {
    fetch("/api/sign-up", {
      method: "POST",
      body: JSON.stringify(currentSignUpData),
    }).then((res) => {
      res.json().then((res) => {
        if (res.success) {
          toast.success(`Otp Send on ${res.email}`);
          sessionStorage.setItem("email", res.email);
          router.push("/sign-up/verification-of-email");
        } else {
          toast.error(res.message);
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
              type="email"
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

                let passwordMsg = passwordChecker(e);
                setPasswordMsg(passwordMsg.message);
                setButtonDis(!passwordMsg.status);
                if (passwordMsg.status) {
                  setPasswordMsgColor("green-600");
                } else {
                  setPasswordMsgColor("red-600");
                }
              }}
            />
            <div
              className={`text-[12px] mx-auto mt-3 font-semibold text-${passwordMsgColor}`}
            >
              {passwordMsg}
            </div>
            <br />

            <Button
              disabled={buttonDisabled}
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
      <ToastContainer />
    </>
  );
}
