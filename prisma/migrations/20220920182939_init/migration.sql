/*
  Warnings:

  - Changed the type of `phone` on the `contacts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `phone` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "phone",
ADD COLUMN     "phone" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "phone",
ADD COLUMN     "phone" INTEGER NOT NULL;
