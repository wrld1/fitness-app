"use client";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

function ActiveNavItem({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();

  const isActive = pathname.startsWith(href);

  return (
    <NavigationMenuLink
      href={href}
      className={cn(className, isActive && "bg-accent text-accent-foreground")}
    >
      {children}
    </NavigationMenuLink>
  );
}

export default ActiveNavItem;
