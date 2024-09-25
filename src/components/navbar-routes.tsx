"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

function NavbarRoutes() {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Link href="/dashboard">
          <Button className="font-semibold" size="sm" variant="ghost">
            <LogOut className="h-4 w-4 mr-2" />
            Вийти
          </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button className="font-semibold" size="sm" variant="ghost">
            Режим вчителя
          </Button>
        </Link>
      )}
      <UserButton />
    </div>
  );
}

export default NavbarRoutes;
