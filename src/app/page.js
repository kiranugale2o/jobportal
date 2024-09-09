import { currentUser, fetchUser } from "@/actions";
import HomePageButton from "@/components/HomePageButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();

  const ProfileUser = await user?.userId;
  console.log(user);

  if (!user) {
    redirect("/sign-in");
  } else {
    if (user && !ProfileUser?._id) {
      redirect("/onboard");
    }
  }

  return (
    <>
      <div className="w-full block lg:flex flex-col mx-auto justify-between">
        <div className="block lg:flex  w-full p-10 bg-gray-200">
          <div className="lg:p-24 lg:w-[600px] block gap-6">
            <div className="text-3xl lg:text-4xl font-semibold">
              Find Your Career .<br /> You Deserve it.
            </div>
            <div className="mt-5 text-[16px] font-extralight">
              Finding the right job shouldn't be difficult. At JobPortal, we
              connect talented individuals with employers who are looking for
              their skills.
            </div>
            <div className="flex lg:item-center lg:gap-8 mt-7">
              <ul>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-square-arrow-up-right"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M8 8h8v8" />
                    <path d="m8 16 8-8" />
                  </svg>
                  <p className="text-[20px] ml-2 font-sans "> Part-time</p>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-square-arrow-up-right"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M8 8h8v8" />
                    <path d="m8 16 8-8" />
                  </svg>
                  <p className="text-[20px] ml-2 font-sans">Full-time</p>
                </li>
              </ul>
              <ul className="ml-5">
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-square-arrow-up-right"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M8 8h8v8" />
                    <path d="m8 16 8-8" />
                  </svg>
                  <p className="text-[20px] ml-2 font-sans"> Remote</p>
                </li>

                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-square-arrow-up-right"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M8 8h8v8" />
                    <path d="m8 16 8-8" />
                  </svg>
                  <p className="text-[20px] ml-2 font-sans">Intership</p>
                </li>
              </ul>
            </div>
            <HomePageButton user={user} ProfileUser={ProfileUser} />
          </div>
          <div className="flex hidden lg:block lg:w-[600px] ">
            <img
              src="banner.png"
              alt="banner"
              className="place-content-center"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
