import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Dumbbell } from "lucide-react";
import MobileSidebar from "./mobile-sidebar";
import PulsatingButton from "@/components/ui/pulsating-button";
import ActiveNavItem from "./active-navLink";

export default function Header() {
  const navItems: { title: string; href: string }[] = [
    { title: "Персональні тренування", href: "/personal-trainings" },
    { title: "Курси", href: "/online-trainings" },
    { title: "Марафони", href: "/marathons" },
    { title: "Акаунт", href: "/dashboard" },
  ];

  return (
    <header className="container fixed top-4 left-1/2 -translate-x-1/2 z-50 mx-auto rounded-2xl border border-border/30 bg-background/80 shadow-lg backdrop-blur-md supports-[backdrop-filter]:bg-background/30">
      <div className="flex py-2 items-center px-4 md:px-3">
        <div className="hidden md:flex flex-1 justify-between w-2/3">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Dumbbell className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block text-xl">
              FitnessPro
            </span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <ActiveNavItem
                    href={item.href}
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors hover:bg-primary/50 hover:text-accent-foreground focus:bg-primary/75 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50 "
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
            <PulsatingButton className="rounded-full" pulseColor="#FFFCE5">
              Пробне тренування
            </PulsatingButton>
            {/* <Button>Get Started</Button> */}
          </div>
        </div>
      </div>
    </header>
  );
}
