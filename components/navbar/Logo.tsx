import React from "react";
import { IoStorefront } from "react-icons/io5";
import { Button } from "../ui/button";
import { FaStore } from "react-icons/fa6";
import Link from "next/link";

function Logo() {
  return (
    <Button className="cursor-pointer" size="icon" asChild>
      <Link href={"/"}>
        <FaStore className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
