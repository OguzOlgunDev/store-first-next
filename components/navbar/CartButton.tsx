import React from "react";
import { Button } from "../ui/button";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";

function CartButton() {
  const numOfProduct = 9;
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link href="/cart">
        <FaCartShopping />
        <span className="absolute -top-4 -left-3 bg-primary rounded-full text-xs text-white flex justify-center items-center h-6 w-6">
          {numOfProduct}
        </span>
      </Link>
    </Button>
  );
}

export default CartButton;
