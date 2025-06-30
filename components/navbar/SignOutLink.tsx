"use client";

import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";
import Link from "next/link";

function SignOutLink() {
  const handleLogOut = () => {
    toast("Loged out succesfuly");
  };
  return (
    <SignOutButton>
      <Link href={"/"}>
        <button className="w-full " onClick={handleLogOut}>
          Log out
        </button>
      </Link>
    </SignOutButton>
  );
}

export default SignOutLink;
