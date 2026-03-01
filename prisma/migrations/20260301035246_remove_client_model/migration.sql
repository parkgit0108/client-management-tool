/*
  Warnings:

  - You are about to drop the column `clientId` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_trainerId_fkey";

-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_clientId_fkey";

-- DropIndex
DROP INDEX "Member_clientId_key";

-- AlterTable
ALTER TABLE "Member" DROP COLUMN "clientId",
ADD COLUMN     "trainerId" TEXT;

-- DropTable
DROP TABLE "Client";

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_trainerId_fkey" FOREIGN KEY ("trainerId") REFERENCES "Trainer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
