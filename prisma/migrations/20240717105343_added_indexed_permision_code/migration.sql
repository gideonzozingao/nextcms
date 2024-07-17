/*
  Warnings:

  - A unique constraint covering the columns `[permissionCode]` on the table `Permission` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `permissionCode` to the `Permission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Permission` ADD COLUMN `permissionCode` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Permission_permissionCode_key` ON `Permission`(`permissionCode`);

-- CreateIndex
CREATE INDEX `Permission_permissionCode_idx` ON `Permission`(`permissionCode`);
