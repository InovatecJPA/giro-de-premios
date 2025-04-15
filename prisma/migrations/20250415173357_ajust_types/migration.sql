/*
  Warnings:

  - You are about to alter the column `amount` on the `extracts` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `BigInt`.
  - You are about to alter the column `total_value` on the `ticket_payments` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `BigInt`.
  - Added the required column `price` to the `ticket_raffles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "extracts" ALTER COLUMN "amount" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "ticket_payments" ALTER COLUMN "total_value" SET DEFAULT 1,
ALTER COLUMN "total_value" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "ticket_raffles" ADD COLUMN     "price" BIGINT NOT NULL;
