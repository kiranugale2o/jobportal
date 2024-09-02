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
import { ChevronRight } from "lucide-react";
import { Cookie } from "next/font/google";
import Cookies from "js-cookie";

export default function VerifyOtpCard() {
  const [currentOtp, setCurrentOtp] = useState([]);
  const random = [1, 2, 3, 4, 5, 6];
  const [warningDis, setWarningDis] = useState("none");
  const [email, setEmail] = useState("");
  const [incorrectOtpDis, setIncorrectOtp] = useState("none");
  const [expriyOtpDis, setExpriesOtp] = useState("none");
  const [seconds, setSeconds] = useState(60); // Initialize countdown with 60 seconds
  const [resendText, setResendText] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Access sessionStorage here
      const value = sessionStorage.getItem("email");
      setEmail(value);
    }

    if (seconds === 0) {
      setResendText(false);
      return;
    } // Stop the timer when it reaches 0
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [seconds]);

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
            Cookies.set("jobportal_token", res.token);
            setIncorrectOtp("none");
            setExpriesOtp("none");
            setWarningDis("none");
            router.push("/");
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

  //handle resend otp function
  async function handleResendOtp() {
    fetch("/api/resend-otp", {
      method: "POST",
      body: JSON.stringify({ email }),
    }).then((res) =>
      res.json().then((res) => {
        if (res.success) {
          setSeconds(60);
          toast.success("Otp send !");
        } else {
          toast.error("otp not send please try again ! ");
        }
      })
    );
  }
  // Determine if the button should be disabled
  const isDisabled = seconds === 0;
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
                      className="border rounded-lg text-[20px] "
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
            <Button
              variant="outline"
              size=""
              type="button"
              disabled={resendText}
              onClick={handleResendOtp}
              className="ml-10 border-none hover:border-none hover:bg-color-none  "
            >
              Didn’t receive a code? Resend ({seconds})
            </Button>
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
