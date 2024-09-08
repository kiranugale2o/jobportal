"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

export default function CommonCard({ title, applicant, company }) {
  return (
    <>
      <Card className="w-30 shadow-md ">
        <CardHeader>
          <CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-amd"
              viewBox="0 0 16 16"
            >
              <path d="m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0zM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2z" />
            </svg>
          </CardTitle>
          {title ? <CardTitle>{title}</CardTitle> : null}
          {company ? <CardDescription>{company}</CardDescription> : null}
        </CardHeader>

        {applicant ? <CardFooter>{applicant}</CardFooter> : null}
      </Card>
    </>
  );
}
