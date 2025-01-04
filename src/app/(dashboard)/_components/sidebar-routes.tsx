"use client";

import { BarChart, Compass, Layout, List, LogOut } from "lucide-react";
import SidebarItem from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    icon: Layout,
    label: "Мої курси",
    href: "/dashboard",
  },
  {
    icon: Compass,
    label: "Всі курси",
    href: "/dashboard/search",
  },
  {
    icon: LogOut,
    label: "Головна сторінка",
    href: "/",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Курси",
    href: "/dashboard/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Аналітика",
    href: "/dashboard/teacher/analytics",
  },
  {
    icon: LogOut,
    label: "Головна сторінка",
    href: "/",
  },
];

function SidebarRoutes() {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
}

export default SidebarRoutes;
