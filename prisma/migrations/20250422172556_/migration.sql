/*
  Warnings:

  - You are about to drop the column `ticket_amount` on the `ticket_payments` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `ticket_raffles` table. All the data in the column will be lost.
  - You are about to alter the column `comissao` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Decimal(5,2)` to `Decimal(3,2)`.
  - Added the required column `price` to the `raffle_editions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discount` to the `ticket_payments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ticket_raffles" DROP CONSTRAINT "ticket_raffles_prize_id_fkey";

-- AlterTable
ALTER TABLE "raffle_editions" ADD COLUMN     "price" DECIMAL(5,2) NOT NULL;

-- AlterTable
ALTER TABLE "ticket_payments" DROP COLUMN "ticket_amount",
ADD COLUMN     "discount" DECIMAL(3,2) NOT NULL,
ALTER COLUMN "total_value" DROP DEFAULT;

-- AlterTable
ALTER TABLE "ticket_raffles" DROP COLUMN "price",
ALTER COLUMN "prize_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "comissao" SET DATA TYPE DECIMAL(3,2);

-- CreateTable
CREATE TABLE "DiscountRule" (
    "id" TEXT NOT NULL,
    "min_tickets" INTEGER NOT NULL,
    "discount_value" DECIMAL(3,2) NOT NULL,
    "raffle_edition_id" TEXT NOT NULL,

    CONSTRAINT "DiscountRule_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ticket_raffles" ADD CONSTRAINT "ticket_raffles_prize_id_fkey" FOREIGN KEY ("prize_id") REFERENCES "prizes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscountRule" ADD CONSTRAINT "DiscountRule_raffle_edition_id_fkey" FOREIGN KEY ("raffle_edition_id") REFERENCES "raffle_editions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
