// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Барре" },
        { name: "Стретчінг" },
        { name: "Функціональні тренування" },
      ],
    });
    console.log("Success");
  } catch (error) {
    console.log("Error seeding in database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
