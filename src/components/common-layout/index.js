import { currentUser, fetchUser } from "@/actions";
import Headers from "../Navbar";
import Link from "next/link";

export default function CommonLayout({ user, ProfileUser, children }) {
  return (
    <>
      {/* headers section */}
      <Headers user={user} ProfileUser={ProfileUser} />
      <main>{children}</main>

      <div className="fixed bottom-3 right-3 lg:right-10">
        <Link href="/chatbot">
          <img width={50} height={50} src="chatbot.png" alt="chatbot" />
        </Link>
      </div>
    </>
  );
}
