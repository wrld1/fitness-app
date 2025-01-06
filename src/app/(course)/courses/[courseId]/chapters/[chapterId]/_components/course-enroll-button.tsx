"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CourseEnrollButtonProps {
  price: number;
  courseId: string;
}

export const CourseEnrollButton = ({
  price,
  courseId,
}: CourseEnrollButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onClick = async () => {
    // try {
    //   setIsLoading(true);

    //   const response = await axios.post(`/api/courses/${courseId}/checkout`);

    //   window.location.assign(response.data.url);
    // } catch {
    //   toast.error("Щось пішло не так");
    // } finally {
    //   setIsLoading(false);
    // }
    setIsLoading(true);
    router.push(`/courses/${courseId}/purchase?price=${price}`);
  };

  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      size="sm"
      className="w-full md:w-auto"
    >
      Отримати доступ {formatPrice(price)}
    </Button>
  );
};
