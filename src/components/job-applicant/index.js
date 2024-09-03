"use client";
import CandidateList from "../candidateList";
import { Drawer, DrawerContent } from "../ui/drawer";

export default function JobApplicant({
  currentCandidateData,
  setCurrentCandidateData,
  showCandidateDrawer,
  setShowDrawerValue,
  showCurrentCandidateDataModel,
  setCurrentCandidateDataModel,
  jobApplication,
}) {
  return (
    <div>
      <Drawer open={showCandidateDrawer} onOpenChange={setShowDrawerValue}>
        <DrawerContent>
          <CandidateList
            currentCandidateData={currentCandidateData}
            setCurrentCandidateData={setCurrentCandidateData}
            showCurrentCandidateDataModel={showCurrentCandidateDataModel}
            setCurrentCandidateDataModel={setCurrentCandidateDataModel}
            jobApplication={jobApplication}
          ></CandidateList>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
