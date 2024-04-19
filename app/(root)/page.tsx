import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper flex flex-col items-center gap-6 md:flex-row">
          <div className="flex-1">
            <h1 className="h1-bold mb-6">
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24 mb-6">
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our world class mentors.
            </p>
            <Button className="w-full rounded-full sm:w-fit">
              <Link href="#events">Explore now</Link>
            </Button>
          </div>
          <div className="flex-1">
            <Image
              width={1000}
              height={1000}
              className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
              src="/assets/images/hero.png"
              alt="A collage of images of people laughing on various events"
            />
          </div>
        </div>
      </section>
      {/* Events section */}
      <section id="events" className="wrapper my-8"></section>
    </main>
  );
}
