/*
  Warnings:

  - A unique constraint covering the columns `[activation_token]` on the table `auths` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[provider_user_id,provider]` on the table `auths` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `prize_id` to the `raffle_editions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('pending', 'rejected', 'paid', 'failed');

-- DropForeignKey
ALTER TABLE "extracts" DROP CONSTRAINT "extracts_comissao_user_id_fkey";

-- DropIndex
DROP INDEX "auths_provider_user_id_key";

-- AlterTable
ALTER TABLE "auths" ADD COLUMN     "activation_token" TEXT,
ADD COLUMN     "expiration_date" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "raffle_editions" ADD COLUMN     "prize_id" TEXT NOT NULL,
ADD COLUMN     "winner_ticket_drawn" BIGINT;

-- CreateTable
CREATE TABLE "winner_payments" (
    "id" TEXT NOT NULL,
    "ticket_raffle_id" TEXT NOT NULL,
    "ticket_payment_id" TEXT NOT NULL,
    "status" "PaymentStatus" NOT NULL DEFAULT 'pending',
    "payment_date" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "winner_payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "withdrawal_request" (
    "id" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "status" "PaymentStatus" NOT NULL DEFAULT 'pending',
    "request_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "approval_date" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "withdrawal_request_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "auths_activation_token_key" ON "auths"("activation_token");

-- CreateIndex
CREATE UNIQUE INDEX "auths_provider_user_id_provider_key" ON "auths"("provider_user_id", "provider");

-- AddForeignKey
ALTER TABLE "raffle_editions" ADD CONSTRAINT "raffle_editions_prize_id_fkey" FOREIGN KEY ("prize_id") REFERENCES "prizes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "winner_payments" ADD CONSTRAINT "winner_payments_ticket_raffle_id_fkey" FOREIGN KEY ("ticket_raffle_id") REFERENCES "ticket_raffles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "winner_payments" ADD CONSTRAINT "winner_payments_ticket_payment_id_fkey" FOREIGN KEY ("ticket_payment_id") REFERENCES "ticket_payments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "withdrawal_request" ADD CONSTRAINT "withdrawal_request_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
