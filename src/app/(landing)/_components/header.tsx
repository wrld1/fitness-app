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
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex py-2 md:py-4 items-center px-4 md:px-0">
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
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 "
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
            <PulsatingButton className="rounded-full" pulseColor="#94BFF0">
              Пробне тренування
            </PulsatingButton>
            {/* <Button>Get Started</Button> */}
          </div>
        </div>
      </div>
    </header>
  );
}
