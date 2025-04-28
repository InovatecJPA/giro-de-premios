/*
  Warnings:

  - You are about to alter the column `amount` on the `extracts` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Decimal(10,2)`.
  - You are about to drop the column `updated_at` on the `ticket_payments` table. All the data in the column will be lost.
  - You are about to alter the column `total_value` on the `ticket_payments` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Decimal(10,2)`.
  - You are about to drop the column `raffle_number` on the `ticket_raffles` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ticket_raffle_number,raffle_edition_id]` on the table `ticket_raffles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ticket_amount` to the `ticket_payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticket_raffle_number` to the `ticket_raffles` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ticket_raffles_raffle_number_raffle_edition_id_key";

-- AlterTable
ALTER TABLE "extracts" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "forgot_password_tokens" ALTER COLUMN "password_reset_token_expires" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "ticket_payments" DROP COLUMN "updated_at",
ADD COLUMN     "ticket_amount" INTEGER NOT NULL,
ALTER COLUMN "total_value" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "ticket_raffles" DROP COLUMN "raffle_number",
ADD COLUMN     "ticket_raffle_number" BIGINT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ticket_raffles_ticket_raffle_number_raffle_edition_id_key" ON "ticket_raffles"("ticket_raffle_number", "raffle_edition_id");
