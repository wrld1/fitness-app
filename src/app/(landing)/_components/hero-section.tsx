import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="relative px-6 w-full pt-14 lg:px-8 min-h-screen overflow-visible">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover brightness-75"
          sizes="100vw"
          quality={100}
        />
      </div>

      <div className="mx-auto py-20 flex justify-center flex-col gap-20 items-center sm:py-24 lg:py-28">
        <div className="text-center">
          <BlurFade delay={0.25} inView>
            <Image
              src="/logos/logo1-white.png"
              width={700}
              height={200}
              alt="Hero Section Logo"
            />
          </BlurFade>

          <BlurFade delay={0.5} inView>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                asChild
                variant="outline"
                className="rounded-full px-10 py-6 text-2xl font-semibold shadow-sm tracking-wide bg-transparent text-white hover:bg-white/70 hover:text-foreground transition-colors border-white"
              >
                <Link href="#about-me">Детальніше</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 z-20">
        {/* <TabsImage /> */}
      </div>
    </div>
  );
}

export default HeroSection;
