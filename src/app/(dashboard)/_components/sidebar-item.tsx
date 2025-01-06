"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemsProps {
  href: string;
  label: string;
  icon: LucideIcon;
}

function SidebarItem({ href, label, icon: Icon }: SidebarItemsProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname === href ||
        (pathname?.startsWith(href) &&
          pathname.split("/").length === href.split("/").length);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-sm font-[500] pl-6 transition-all hover:text-foreground/80 hover:bg-primary/80",
        isActive && "bg-primary text-secondary-foreground"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-foreground/70", isActive && "text-foreground")}
        />
        <span className="font-bold">{label}</span>
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
}

export default SidebarItem;
