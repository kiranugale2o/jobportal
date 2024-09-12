"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import HomePageButton from "../HomePageButton";
import { jobCategories } from "@/utils";
import { useRouter } from "next/navigation";

export default function HomePage({ user, ProfileUser }) {
  const router = useRouter();
  return (
    <>
      <div className="w-full block lg:flex flex-col mx-auto justify-between lg:bg-cyan-100   ">
        <div className="block lg:flex  w-full p-10 ">
          <div className="lg:p-24 lg:w-[600px] block gap-6">
            <div className="text-3xl lg:text-4xl font-semibold">
              Find Your Career .<br /> You Deserve it.
            </div>
            <div className="mt-5 text-[16px] font-extralight">
              Finding the right job shouldn't be difficult. At JobPortal, we
              connect talented individuals with employers who are looking for
              their skills.
            </div>
            <div className="flex ml:0  lg:item-center lg:gap-8 mt-7">
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
          <div className="flex hidden p-10 mt-10 lg:block lg:w-[600px] ">
            <img
              src="banner.png"
              alt="banner"
              className="place-content-center"
            ></img>
          </div>
        </div>
      </div>

      <div className="block lg:flex justify-between item-center w-full lg:p-24 bg-gray-100">
        <div className="flex w-full">
          <img className="w-[450px]" src="banner2.jpg" alt="banner2" />
        </div>
        <div className="flex flex-col mt-5 p-5 w-full">
          <h1 className="text-3xl lg:text-4xl font-semibold">
            Millions of jobs.
            <br /> Find the one that's right for you.
          </h1>
          <p className="mt-5 text-[16px] font-extralight">
            Our have to be burning with an idea, or a problem, or a wrong that
            you want to right. If you're not passionate enough from the start,
            you'll never stick it out.
          </p>
          <ul className="grid-col-gap-5 gap-4 ">
            <li className="mt-4 flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-circle-chevron-right"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m10 8 4 4-4 4" />
              </svg>
              Digital Marketing Solutions for Tomorrow
            </li>
            <li className="mt-2 flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-circle-chevron-right"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m10 8 4 4-4 4" />
              </svg>
              Our Talented & Experienced Marketing Agency
            </li>
            <li className="mt-2 flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-circle-chevron-right"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m10 8 4 4-4 4" />
              </svg>
              Create your own skin to match your brand
            </li>
          </ul>

          <Button
            className="mt-8 w-[150px]"
            size="icon"
            onClick={() => {
              router.push("/jobs");
            }}
          >
            Find Jobs
            <ChevronRight className="h-4 w-8 " />
          </Button>
        </div>
      </div>

      <div className="block lg:flex justify-between item-center w-full lg:p-24 bg-slate-100 ">
        <div className="flex flex-col mt-5 p-5 w-full">
          <h1 className="text-3xl lg:text-4xl font-semibold">
            Make a difference with your online resume!
          </h1>
          <p className="mt-5 text-[16px] font-extralight">
            Our have to be burning with an idea, or a problem, or a wrong that
            you want to right. If you're not passionate enough from the start,
            you'll never stick it out.
          </p>

          <div className="mt-4 flex lg:p-10 flex-col grid-col-gap-5 gap-5">
            <div className="w-full h-[100px] lg:w-[400px] lg:h-[80px] bg-gray-100 shadow-md flex justify-evenly p-5">
              <p className="text-4xl font-bold ">140k+</p>
              <p className="text-[20px]  font-bold mt-2">Open positions</p>
            </div>

            <div className="w-full h-[100px] lg:w-[400px] lg:h-[80px] bg-gray-100  shadow-md flex justify-evenly p-5">
              <p className="text-4xl font-bold ">18k+</p>
              <p className="text-[20px] font-bold mt-2">
                Active workers on demand
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <img className="w-[450px]" src="banner3.jpg" alt="banner2" />
        </div>
      </div>

      <div className="block lg:flex mt-5 flex-col text-center item-center lg:p-24 ">
        <div className="text-3xl font-serif font-semibold">
          Popular Job Listing
        </div>
        <div className="mt-5   text-[17px] font-extralight font-gray-100">
          Search all the open positions on the web. Get your own personalized
          salary estimate.
          <br /> Read reviews on over 30000+ companies worldwide.
        </div>
        <div className="mx-0 p-0">
          <Carousel
            opts={{
              align: "start",
            }}
            className=" block lg:flex p-10"
          >
            <CarouselContent className="lg:ml-0">
              {jobCategories.map((d) => {
                return (
                  <CarouselItem className=" md:basis-48 lg:basis-44 lg:ml-0">
                    <div className=" p-10 w-[180px] lg:w-[170px] lg:h-[200px] shadow-lg border flex-col ">
                      <div className="logo ml-5 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-cpu"
                        >
                          <rect width="16" height="16" x="4" y="4" rx="2" />
                          <rect width="6" height="6" x="9" y="9" rx="1" />
                          <path d="M15 2v2" />
                          <path d="M15 20v2" />
                          <path d="M2 15h2" />
                          <path d="M2 9h2" />
                          <path d="M20 15h2" />
                          <path d="M20 9h2" />
                          <path d="M9 2v2" />
                          <path d="M9 20v2" />
                        </svg>
                      </div>
                      <div className="text-xl  semi-bold ">{d}</div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="hidden lg:flex">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
      <footer className="text-center w-full bg-gray-300 p-5">
        <p>Copyright © 2024 jobEra. All Rights Reserved.</p>
      </footer>
    </>
  );
}
