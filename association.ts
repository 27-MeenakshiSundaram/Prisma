import { PrismaClient } from './generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const schoolsWithStudents = await prisma.school.findMany({
    include: {
      students: true,
    },
  });

  console.dir(schoolsWithStudents, { depth: null });
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
