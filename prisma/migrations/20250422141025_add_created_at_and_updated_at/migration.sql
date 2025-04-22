/*
  Warnings:

  - You are about to drop the column `userId` on the `raffle_editions` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `forgot_password_tokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `prizes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `raffle_editions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `ticket_payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `ticket_raffles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "raffle_editions" DROP CONSTRAINT "raffle_editions_userId_fkey";

-- AlterTable
ALTER TABLE "auths" ALTER COLUMN "updated_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "extracts" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "forgot_password_tokens" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "prizes" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "raffle_editions" DROP COLUMN "userId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ticket_payments" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ticket_raffles" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "raffle_editions" ADD CONSTRAINT "raffle_editions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
