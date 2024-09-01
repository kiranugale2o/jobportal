"use client";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CardContent,
  CardHeader,
  CardTitle,
  Card,
  CardDescription,
} from "../ui/card";
import Link from "next/link";

export default function VerifyOtpCard() {
  const [currentOtp, setCurrentOtp] = useState([]);
  const random = [1, 2, 3, 4, 5, 6];
  const [warningDis, setWarningDis] = useState("none");
  const [email, setEmail] = useState("");
  const [incorrectOtpDis, setIncorrectOtp] = useState("none");
  const [expriyOtpDis, setExpriesOtp] = useState("none");
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Access sessionStorage here
      const value = sessionStorage.getItem("email");
      setEmail(value);
    }
  }, []);
  console.log(currentOtp);

  async function otpChecker() {
    let otp = "";
    currentOtp.map((d) => {
      if (d === "") {
        setWarningDis("block");
      }
      otp = otp + d;
    });

    if (currentOtp.length < 6 || otp === "") {
      setWarningDis("block");
    } else {
      setWarningDis("none");
      alert();
      const data = {
        email,
        otp,
      };
      fetch("/api/verification-otp", {
        method: "POST",
        body: JSON.stringify(data),
      }).then((res) => {
        res.json().then((res) => {
          if (res.success) {
            toast.success(res.message);
          } else {
            if (res.status === 1) {
              setIncorrectOtp("block");
            } else {
              setExpriesOtp("block");
            }
          }
        });
      });
    }
  }

  function checkDigit(e, i) {
    if (e.target.value >= 0 && e.target.value < 10) {
      currentOtp[i] = e.target.value;
    } else {
      toast.warn("only one digit Enter in box");
    }
  }
  return (
    <>
      <Card className=" mt-10 w-[350px] mx-auto lg:mt-auto shadow flex flex-col lg:w-[400px] item-center">
        <CardHeader className="p-6 ml-auto mr-auto mt-auto">
          <CardTitle className="text-[22px] mx-auto">
            Verify your email
          </CardTitle>
          <CardDescription className="mx-auto flex flex-col ">
            <p>Enter the verification code sent to your email</p>
            <p className="mx-auto">{email}</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="justify-between">
          <form action={otpChecker} className="">
            <div className="flex w-full gap-5 grid-col-gap-3">
              {random.map((d, i) => {
                return (
                  <div key={i} className="flex justify-between">
                    <Input
                      className="border rounded-lg text-[20px]"
                      onChange={(e) => {
                        checkDigit(e, i);
                      }}
                    />
                  </div>
                );
              })}
            </div>

            <div
              className="text-[13px] mx-auto mt-3   text-center  text-red-600 "
              style={{ display: `${expriyOtpDis}` }}
            >
              Otp expired !
            </div>
            <div
              className="text-[13px] mx-auto mt-3  text-center   text-red-600 "
              style={{ display: `${incorrectOtpDis}` }}
            >
              Incorrect code !
            </div>
            <div
              className="text-[13px]  mt-3  text-center  font-semibold  text-red-600 "
              style={{ display: `${warningDis}` }}
            >
              Enter Code .
            </div>

            <Link
              href="/"
              className="text-[13px] font-bold  ml-14  hover:underline underline-offset-2 "
            >
              Didn't receive a code ? Resend{Date.now()}
            </Link>
            <br />
            <Button className="mt-5 w-full" type="submit">
              Continue
            </Button>
          </form>
        </CardContent>
      </Card>
      <ToastContainer />
    </>
  );
}
