/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `ContentType` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `ContentType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ContentType` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `ContentType_slug_key` ON `ContentType`(`slug`);
