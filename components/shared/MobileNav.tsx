// READ: https://ui.shadcn.com/docs/components/sheet
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// READ: https://ui.shadcn.com/docs/components/separator
import { Separator } from "@/components/ui/separator";

import Image from "next/image";
import NavItems from "./NavItems";

function MobileNav() {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="Menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently logo"
          />
          <Separator />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav;
