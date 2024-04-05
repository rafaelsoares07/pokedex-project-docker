/*
  Warnings:

  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `trainerName` on the `User` table. All the data in the column will be lost.
  - Added the required column `lastname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teste` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trainername` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "lastName",
DROP COLUMN "phone",
DROP COLUMN "trainerName",
ADD COLUMN     "lastname" TEXT NOT NULL,
ADD COLUMN     "teste" TEXT NOT NULL,
ADD COLUMN     "trainername" TEXT NOT NULL;
