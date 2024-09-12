"use client";
import CandidateJobs from "../candidate-job-card";
import CommonCard from "../common-job-card";
import JobApplicant from "../job-applicant";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function ActivityCard({ jobList, jobApplication }) {
  const statusArray = [
    ...new Set(
      jobApplication.map((jobApplication) => jobApplication.status).flat(1)
    ),
  ];

  // console.log(
  //   jobList.filter((item) =>
  //     jobApplication.filter((jobApplication) => {
  //       jobApplication.jobId === item._id &&
  //         jobApplication.status.includes("rejected");
  //     })
  //   )
  // );

  return (
    <>
      <Tabs defaultValue="Applied">
        <div className="flex w-full justify-between p-0 lg:p-20">
          <div className="w-full ">
            <div className="block grid gap-4 grid-row-2 lg:flex flex-row justify-between border-b-4 p-10 lg:p-10 ">
              <h1 className="text-3xl font-bold">Activity</h1>
              <TabsList className="grid grid-cols-3">
                {statusArray.map((status) => {
                  return <TabsTrigger value={status}>{status}</TabsTrigger>;
                })}
              </TabsList>
            </div>
            <div className="flex flex-col grid-col-gap-6 gap-6">
              <TabsContent value="Applied">
                {jobList
                  .filter(
                    (item) =>
                      jobApplication
                        .filter((jobApplication) =>
                          jobApplication.status.includes("Applied")
                        )
                        .findIndex(
                          (filterItem) => item._id === filterItem.jobId
                        ) > -1
                  )
                  .map((d, i) => {
                    return (
                      <div key={i} className="mt-4  grid-col-gap-5 gap-5">
                        <CommonCard
                          title={d?.jobtitle}
                          days={d?.postDate}
company={d?.companyName}
                        ></CommonCard>
                      </div>
                    );
                  })}
              </TabsContent>

              <TabsContent value="selected">
                {jobList
                  .filter(
                    (item) =>
                      jobApplication
                        .filter((jobApplication) =>
                          jobApplication.status.includes("selected")
                        )
                        .findIndex(
                          (filterItem) => item._id === filterItem.jobId
                        ) > -1
                  )
                  .map((d) => {
                    return (
                      <CommonCard
                        title={d?.jobtitle}
                       days={d?.postDate} company={d?.companyName}
                      ></CommonCard>
                    );
                  })}
              </TabsContent>

              <TabsContent value="rejected">
                {jobList
                  .filter(
                    (item) =>
                      jobApplication
                        .filter((jobApplication) =>
                          jobApplication.status.includes("rejected")
                        )
                        .findIndex(
                          (filterItem) => item._id === filterItem.jobId
                        ) > -1
                  )
                  .map((d) => {
                    return (
                      <CommonCard
                        title={d?.jobtitle}
 days={d?.postDate}
                        company={d?.companyName}
                      ></CommonCard>
                    );
                  })}
              </TabsContent>
            </div>
          </div>
        </div>
      </Tabs>
    </>
  );
}
