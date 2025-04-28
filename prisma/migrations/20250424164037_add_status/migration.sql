/*
  Warnings:

  - You are about to drop the `DiscountRule` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
ALTER TYPE "TicketRaffleStatus" ADD VALUE 'reserved';

-- DropForeignKey
ALTER TABLE "DiscountRule" DROP CONSTRAINT "DiscountRule_raffle_edition_id_fkey";

-- DropTable
DROP TABLE "DiscountRule";

-- CreateTable
CREATE TABLE "discount_rules" (
    "id" TEXT NOT NULL,
    "min_tickets" INTEGER NOT NULL,
    "discount_value" DECIMAL(3,2) NOT NULL,
    "raffle_edition_id" TEXT NOT NULL,

    CONSTRAINT "discount_rules_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "discount_rules" ADD CONSTRAINT "discount_rules_raffle_edition_id_fkey" FOREIGN KEY ("raffle_edition_id") REFERENCES "raffle_editions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
