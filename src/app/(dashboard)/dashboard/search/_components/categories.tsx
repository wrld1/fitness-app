"use client";

import { Category } from "@prisma/client";

import { FaRunning } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { SiFuturelearn } from "react-icons/si";
import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  Марафони: FaRunning,
  "Персональні тренування": SiFuturelearn,
};

export function Categories({ items }: CategoriesProps) {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
}