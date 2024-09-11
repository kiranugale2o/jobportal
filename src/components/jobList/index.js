"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { filterMenuDataArray, formUrlQuery } from "@/utils";
import CandidateJobs from "../candidate-job-card";
import PostJob from "../post-job";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";
import { Label } from "../ui/label";
import CommonCard from "../common-job-card";
import RecruiterJobs from "../recruiter-job-card";

export default function JobListPage({
  ProfileUser,
  user,
  jobList,
  jobApplication,
  filterCategory,
}) {
  const router = useRouter();
  const [filterParams, setFilterParams] = useState({});

  // Generate filterMenu
  const filterMenu = filterMenuDataArray.map((item) => ({
    id: item.id,
    name: item.label,
    options: [...new Set(filterCategory.map((listItem) => listItem[item.id]))],
  }));

  // Handle filter selection
  async function handleFilter(getfilterId, getOption) {
    const cpyFilterParams = { ...filterParams };

    if (!cpyFilterParams[getfilterId]) {
      cpyFilterParams[getfilterId] = [];
    }

    const indexOfCurrentOption = cpyFilterParams[getfilterId].indexOf(
      getOption
    );
    if (indexOfCurrentOption === -1) {
      cpyFilterParams[getfilterId].push(getOption);
    } else {
      cpyFilterParams[getfilterId].splice(indexOfCurrentOption, 1);
    }

    setFilterParams(cpyFilterParams);
    sessionStorage.setItem("filterParams", JSON.stringify(cpyFilterParams));
  }

  // Load filterParams from sessionStorage on initial render
  useEffect(() => {
    const storedParams = JSON.parse(sessionStorage.getItem("filterParams"));
    if (storedParams) {
      setFilterParams(storedParams);
    }
  }, []);

  // Update the URL with query parameters without page refresh
  useEffect(() => {
    if (Object.keys(filterParams).length > 0) {
      const url = formUrlQuery({
        params: window.location.search,
        data: filterParams,
      });
      router.push(url, { scroll: false }, { shallow: true });
    }
    sessionStorage.removeItem("filterParams");
  }, [filterParams]);

  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className=" block lg:flex item-baseline justify-between border-b p-10 lg:pb-6 lg:pt-20">
        <h1 className="text-3xl font-semibold lg:pl-8">
          {ProfileUser?.role === "candidate"
            ? "Explore All Jobs"
            : "Job Dashboard"}
        </h1>
        <div className="flex  mt-5">
          {ProfileUser?.role === "candidate" ? (
            <Menubar className="flex">
              {filterMenu.map((item) => (
                <MenubarMenu key={item.id}>
                  <MenubarTrigger>{item.name}</MenubarTrigger>
                  <MenubarContent>
                    {item.options.map((menuItem, index) => (
                      <MenubarItem
                        key={index}
                        onClick={() => handleFilter(item.id, menuItem)}
                      >
                        <div
                          className={`h-4 w-4 border rounded border-gray-800 ${
                            filterParams[item.id]?.includes(menuItem)
                              ? "bg-black"
                              : ""
                          }`}
                        ></div>
                        <Label className="ml-2">{menuItem}</Label>
                      </MenubarItem>
                    ))}
                  </MenubarContent>
                </MenubarMenu>
              ))}
            </Menubar>
          ) : (
            <PostJob ProfileUser={ProfileUser} user={user} />
          )}
        </div>
      </div>
      <div className="pt-10 pb-24 justify-between">
        <div className="w-full">
          <div className="container grid grid-rows-3 gap-4 lg:grid-cols-3">
            {ProfileUser?.role === "recruiter" ? (
              jobList && jobList.length > 0 ? (
                jobList.map((jobItem) => (
                  <RecruiterJobs
                    key={jobItem.id}
                    jobItem={jobItem}
                    ProfileInfo={ProfileUser}
                    jobApplication={jobApplication}
                  />
                ))
              ) : (
                <div className="text-3xl font-semibold mx-auto p-auto">
                  No Job Posted !
                </div>
              )
            ) : (
              jobList &&
              jobList.length > 0 &&
              jobList.map((jobItem) => (
                <CandidateJobs
                  key={jobItem.id}
                  jobItem={JSON.parse(JSON.stringify(jobItem))}
                  ProfileInfo={ProfileUser}
                  jobApplication={jobApplication}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
