/*
  Warnings:

  - Added the required column `birthday` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `Trainer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Trainer" ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL;
