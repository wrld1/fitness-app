import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

function TeacherLayout({ children }: { children: React.ReactNode }) {
  const { userId } = auth();

  if (!isTeacher(userId)) {
    return redirect("/dashboard");
  }

  return <>{children}</>;
}

export default TeacherLayout;
