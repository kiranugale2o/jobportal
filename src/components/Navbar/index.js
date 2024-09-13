//import { currentUser, fetchUser } from "@/actions";
"use client";
import { currentUser, fetchUser } from "@/actions";
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
import Userbutton from "../userButton";
import { useRouter } from "next/navigation";

export default function Headers({ user, ProfileUser }) {
  const router = useRouter();
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "login",
      path: "/sign-in",
      show: !user,
    },
    {
      label: "register",
      path: "/sign-up",
      show: !user,
    },
    {
      label: "Job",
      path: "/jobs",
      show: ProfileUser,
    },

    {
      label: "Activity",
      path: "/activity",
      show: ProfileUser?.role === "candidate",
    },
    {
      label: "Account",
      path: "/account",
      show: ProfileUser,
    },
  ];
  return (
    <>
      <div>
        <div className="flex shadow justify-between item-center w-full bg-cyan-50  h-auto ">
          <div
            className="text-start  text-2xl font-semibold p-5 uppercase "
            onClick={() => {
              router.push("/");
            }}
          >
            JobEra
          </div>
          <Sheet>
            <SheetTrigger className="flex mt-6  mr-10 lg:hidden">
              <MenuIcon className="font-2xl" />
            </SheetTrigger>
            <SheetContent>
              <SheetTitle
                className="uppercase text-2xl semibold "
                onClick={() => {
                  router.push("/");
                }}
              >
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

              <div
                className="mt-0 mr-10"
                style={{ display: `${user ? "block" : "none"}` }}
              >
                <Userbutton user={user} ProfileUser={ProfileUser} />
              </div>
            </SheetContent>
          </Sheet>

          <div className=" hidden lg:flex flex-row mt-6   grid gap-10 grid-cols-3 mr-5">
            {menuItems.map((d) => {
              return (
                <>
                  {d.show ? (
                    <Link
                      href={d.path}
                      className="text-1.3xl  hover:text-yellow-300 p-auto font-semibold uppercase"
                    >
                      {d.label}
                    </Link>
                  ) : null}
                </>
              );
            })}

            <div
              className="mt-[-10px] mr-10 "
              style={{ display: `${user ? "block" : "none"}` }}
            >
              <Userbutton user={user} ProfileUser={ProfileUser} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
