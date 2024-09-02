"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { MenuIcon } from "lucide-react";

import Link from "next/link";

export default function Headers() {
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "login",
      path: "/sign-in",
      show: true,
    },
    {
      label: "register",
      path: "/sign-up",
      show: true,
    },
    {
      label: "Job",
      path: "/jobs",
      show: true,
    },
    {
      label: "Membership",
      path: "/membership",
      show: true,
    },
    {
      label: "Activity",
      path: "/activity",
      show: true,
    },
    {
      label: "Account",
      path: "/account",
      show: true,
    },
  ];
  return (
    <>
      <div>
        <div className="flex shadow justify-between item-center w-full  h-auto ">
          <div className="text-start  text-3xl font-semibold p-5 uppercase ">
            JobEra
          </div>
          <Sheet>
            <SheetTrigger className="flex mt-6  mr-10 lg:hidden">
              <MenuIcon className="font-2xl" />
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="uppercase text-2xl semibold text-green-200">
                JobEra
              </SheetTitle>
              <div className=" flex flex-col lg:hidden justify-start mt-6   ">
                {menuItems.map((d) => {
                  return (
                    <div key={d.label}>
                      {d.show ? (
                        <Link
                          href={d.path}
                          className="w-20 text-1xl p-3 grid g-5 font-semibold uppercase "
                        >
                          {d.label}
                        </Link>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>

          <div className=" hidden lg:flex flex-row mt-6   grid gap-10 grid-cols-3">
            {menuItems.map((d) => {
              return (
                <>
                  {d.show ? (
                    <Link
                      href={d.path}
                      className="text-1.3xl font-semibold uppercase"
                    >
                      {d.label}
                    </Link>
                  ) : null}
                </>
              );
            })}
            <div className="mt-0 mr-10">{/*user button */}</div>
          </div>
        </div>
      </div>
    </>
  );
}
