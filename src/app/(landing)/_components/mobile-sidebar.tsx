"use client";

import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function MobileSidebar({
  navItems,
}: {
  navItems: { title: string; href: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="iconSm" className="mr-2 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Image
            src="/logos/logo2-black.png"
            width={64}
            height={64}
            alt="Logo"
            className="mb-8"
          />
        </Link>

        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block px-2 py-1 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileSidebar;
