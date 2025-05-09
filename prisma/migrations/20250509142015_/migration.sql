/*
  Warnings:

  - A unique constraint covering the columns `[social_media]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ticket_payments" ADD COLUMN     "user_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "users_social_media_key" ON "users"("social_media");

-- AddForeignKey
ALTER TABLE "ticket_payments" ADD CONSTRAINT "ticket_payments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
