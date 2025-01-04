import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Body Update by Liza Fabis | Список курсів - Управління",
  description: "Прокачай своє тіло",
};

function TeacherLayout({ children }: { children: React.ReactNode }) {
  const { userId } = auth();

  if (!isTeacher(userId)) {
    return redirect("/dashboard");
  }

  return <>{children}</>;
}

export default TeacherLayout;
