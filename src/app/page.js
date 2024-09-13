import { currentUser, fetchUser } from "@/actions";
import HomePageButton from "@/components/HomePageButton";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { jobCategories } from "@/utils";
import HomePage from "@/components/homePage";

export default async function Home() {
  const user = await currentUser();

  const ProfileUser = await fetchUser(user?.userId);
  console.log(user);

  if (user && !ProfileUser?._id) {
    redirect("/onboard");
  }

  return <HomePage user={user} ProfileUser={ProfileUser} />;
}
