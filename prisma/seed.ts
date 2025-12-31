import { Day, PrismaClient, UserSex } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import "dotenv/config";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  // ADMIN
  await prisma.admin.create({
    data: {
      id: "admin1",
      username: "admin1",
    },
  });
  await prisma.admin.create({
    data: {
      id: "admin2",
      username: "admin2",
    },
  });

  // CLASS
  for (let i = 1; i <= 6; i++) {
    await prisma.class.create({
      data: {
        name: `${i}A`,
        day: Day[
          Object.keys(Day)[
            Math.floor(Math.random() * Object.keys(Day).length)
          ] as keyof typeof Day
        ],
        capacity: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
        startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
        endTime: new Date(new Date().setHours(new Date().getHours() + 3)),
      },
    });
  }

  // TRAINER
  for (let i = 1; i <= 15; i++) {
    await prisma.trainer.create({
      data: {
        id: `trainer${i}`,
        username: `trainer${i}`,
        name: `TName${i}`,
        surname: `TSurname${i}`,
        email: `trainer${i}@example.com`,
        phone: `123-456-789${i}`,
        address: `Address${i}`,
        sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
        classes: { connect: [{ id: (i % 6) + 1 }] },
        birthday: new Date(
          new Date().setFullYear(new Date().getFullYear() - 30)
        ),
      },
    });
  }

  // CLIENT
  for (let i = 1; i <= 25; i++) {
    await prisma.client.create({
      data: {
        id: `client${i}`,
        username: `client${i}`,
        name: `CName ${i}`,
        surname: `CSurname ${i}`,
        email: `client${i}@example.com`,
        phone: `123-456-789${i}`,
        address: `Address${i}`,
        birthday: new Date(
          new Date().setFullYear(new Date().getFullYear() - 25)
        ),
      },
    });
  }

  // MEMBER
  for (let i = 1; i <= 50; i++) {
    await prisma.member.create({
      data: {
        id: `member${i}`,
        username: `member${i}`,
        name: `MName${i}`,
        surname: `MSurname ${i}`,
        email: `member${i}@example.com`,
        phone: `987-654-321${i}`,
        address: `Address${i}`,
        sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
        clientId: i <= 25 ? `client${i}` : null,
        classes: { connect: [{ id: (i % 6) + 1 }] },
        birthday: new Date(
          new Date().setFullYear(new Date().getFullYear() - 20)
        ),
      },
    });
  }

  // ATTENDANCE
  for (let i = 1; i <= 10; i++) {
    await prisma.attendance.create({
      data: {
        date: new Date(),
        present: true,
        memberId: `member${i}`,
        classId: (i % 6) + 1,
      },
    });
  }

  // EVENT
  for (let i = 1; i <= 5; i++) {
    await prisma.event.create({
      data: {
        title: `Event ${i}`,
        description: `Description for Event ${i}`,
        startDate: new Date(new Date().setHours(new Date().getHours() + 1)),
        endDate: new Date(new Date().setHours(new Date().getHours() + 2)),
        classId: (i % 5) + 1,
      },
    });
  }

  // ANNOUNCEMENT
  for (let i = 1; i <= 5; i++) {
    await prisma.announcement.create({
      data: {
        title: `Announcement ${i}`,
        description: `Description for Announcement ${i}`,
        date: new Date(),
        classId: (i % 5) + 1,
      },
    });
  }

  console.log("Seeding completed successfully.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
