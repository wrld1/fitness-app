import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import MobileSidebar from "./mobile-sidebar";
import ActiveNavItem from "./active-navLink";
import ShimmerButton from "@/components/ui/shimmer-button";
import Image from "next/image";

export default function Header() {
  const navItems: { title: string; href: string }[] = [
    { title: "Персональні тренування", href: "/personal-trainings" },
    { title: "Курси", href: "/online-trainings" },
    { title: "Акаунт", href: "/dashboard" },
  ];

  return (
    <header className="w-[95vw] md:container fixed top-2 md:top-4 left-1/2 -translate-x-1/2 z-50 mx-auto rounded-2xl border border-border/10 bg-white/80 shadow-lg backdrop-blur-md supports-[backdrop-filter]:bg-white/30">
      <div className="flex py-2 items-center px-4 md:px-3">
        <div className="hidden md:flex flex-1 justify-between w-2/3">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/logos/logo3.png" alt="Logo" height={40} width={40} />
            <span className="hidden font-bold sm:inline-block text-xl">
              Body Update
            </span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <ActiveNavItem
                    href={item.href}
                    className="group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-md font-medium transition-colors hover:bg-white/50 hover:text-accent-foreground focus:bg-white/75 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/50 data-[state=open]:bg-white/50 "
                  >
                    {item.title}
                  </ActiveNavItem>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <MobileSidebar navItems={navItems} />
        <div className="flex md:w-1/3 items-center ml-auto justify-between space-x-2 md:justify-end">
          <div className="w-full md:w-auto md:flex-none flex">
            <Link href="/dashboard/search">
              <ShimmerButton
                className="rounded-full py-1 px-4"
                background="#CA5B2B"
              >
                <span className="whitespace-pre-wrap text-center text-base font-medium tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Пробне тренування
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
