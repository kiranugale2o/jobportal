"use client";
import { initialJobData } from "@/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function CommonForm({
  formData,
  currentData,
  setData,
  buttonText,
  buttonAction,
  handleFileChange,
}) {
  console.log("curr", currentData);

  return (
    <>
      <div className="flex flex-col w-full justify-between item-center ">
        <div className="w-full p-10">
          <form action={buttonAction} className=" grid gap-5 grid-row-4 w-full">
            {formData.map((d) => {
              return (
                <>
                  {d.contentType === "file" ? (
                    <>
                      <Label className="input-group-text" htmlFor={d.name}>
                        {d.label}
                      </Label>
                      <Input
                        required
                        key={d.label}
                        className="bg-white hover:bg-stone-50 p-auto text-1xl hover:drop-shadow-2xl hover:bg-white "
                        type={d.contentType}
                        disabled={d.disabled}
                        name={d.name}
                        onChange={(e) => handleFileChange(e)}
                        placeholder={d.placeholder}
                      ></Input>
                    </>
                  ) : (
                    <Input
                      required
                      key={d.label}
                      className="bg-white hover:bg-stone-50 p-auto text-1xl hover:drop-shadow-2xl hover:bg-white "
                      type={d.contentType}
                      disabled={d.disabled}
                      value={currentData?.[d.label] || ""}
                      name={d.name}
                      onChange={(e) => {
                        setData({
                          ...currentData,
                          [d.label]: e.target.value,
                        });
                      }}
                      placeholder={d.placeholder}
                    ></Input>
                  )}
                </>
              );
            })}
            <Button type="submit" className="w-2/3 lg:w-1/3">
              {buttonText}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
