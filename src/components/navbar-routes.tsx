"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { useEffect, useState } from "react";

function NavbarRoutes() {
  const pathname = usePathname();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const isTeacherPage = pathname?.startsWith("/dashboard/teacher");
  const isPlayerPage = pathname?.includes("/chapter");
  const isSearchPage = pathname === "/dashboard/search";

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isPlayerPage ? (
          <Link href="/dashboard">
            <Button className="font-semibold" size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Вийти
            </Button>
          </Link>
        ) : (
          <Link href="/dashboard/teacher/courses">
            <Button className="font-semibold" size="sm" variant="ghost">
              Режим вчителя
            </Button>
          </Link>
        )}
        <UserButton />
      </div>
    </>
  );
}

export default NavbarRoutes;
