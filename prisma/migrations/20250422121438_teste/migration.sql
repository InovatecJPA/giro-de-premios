/*
  Warnings:

  - You are about to drop the column `isVerified` on the `auths` table. All the data in the column will be lost.
  - You are about to drop the column `passsword_hash` on the `auths` table. All the data in the column will be lost.
  - Made the column `provider_user_id` on table `auths` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "auths" DROP COLUMN "isVerified",
DROP COLUMN "passsword_hash",
ADD COLUMN     "is_verified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "password_hash" TEXT,
ALTER COLUMN "provider_user_id" SET NOT NULL;
