import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between py-5">
        <Link href={"/"} className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="evently logo"
          />
        </Link>
        {/* desktop nav */}
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
        <div className="flex items-center gap-3">
          {/* READ: https://clerk.com/docs/components/control/signed-in */}
          <SignedIn>
            {/* READ: https://clerk.com/docs/components/user/user-button */}
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          {/* READ: https://clerk.com/docs/components/control/signed-out */}
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}

export default Header;
