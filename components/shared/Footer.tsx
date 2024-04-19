import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-col gap-4 py-6 md:flex-row md:justify-between">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="Evently logo"
            width={128}
            height={38}
          />
        </Link>
        <p>2024 Evently. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
