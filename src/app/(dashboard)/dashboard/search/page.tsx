import { db } from "@/lib/db";
import { Categories } from "./_components/categories";

async function SearchPage() {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div className="p-6">
      <Categories items={categories} />
    </div>
  );
}

export default SearchPage;
