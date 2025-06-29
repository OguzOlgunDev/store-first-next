import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";
import Link from "next/link";
import { Button } from "../ui/button";
import { links } from "@/utils/links";

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <LuAlignLeft className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="w-40  flex-col gap-4">
        {links.map((link, index) => (
          <DropdownMenuItem asChild key={index}>
            <Link href={link.href}>{link.label}</Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinksDropdown;
