import { Button } from "@/components/ui/button";
import Link from "next/link";

function CoursesPage() {
  return (
    <div className="p-6">
      <Link href="/teacher/create">
        <Button>Новий курс</Button>
      </Link>
    </div>
  );
}

export default CoursesPage;
