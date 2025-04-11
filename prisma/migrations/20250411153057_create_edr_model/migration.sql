-- CreateEnum
CREATE TYPE "RaffleEditionStatus" AS ENUM ('pending', 'active', 'closed');

-- CreateEnum
CREATE TYPE "Profiles" AS ENUM ('suporte', 'owner', 'influencer');

-- CreateEnum
CREATE TYPE "TicketRaffleStatus" AS ENUM ('bought', 'available');

-- CreateEnum
CREATE TYPE "ExtractType" AS ENUM ('deposit', 'withdrawal');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "social_media" TEXT,
    "saldo" MONEY NOT NULL DEFAULT 0,
    "hashed_password" TEXT NOT NULL,
    "comissao" DECIMAL(5,2) NOT NULL,
    "profile" "Profiles" NOT NULL,
    "owner_id" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "raffle_editions" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "RaffleEditionStatus" NOT NULL DEFAULT 'pending',
    "total_tickets" INTEGER NOT NULL,
    "winner_tickets" INTEGER NOT NULL,
    "raffle_draw_date" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT,
    "userId" TEXT,

    CONSTRAINT "raffle_editions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prizes" (
    "id" TEXT NOT NULL,
    "prize_name" TEXT NOT NULL,
    "prize_quantity" INTEGER NOT NULL,

    CONSTRAINT "prizes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket_raffles" (
    "id" TEXT NOT NULL,
    "raffle_number" BIGINT NOT NULL,
    "status" "TicketRaffleStatus" NOT NULL DEFAULT 'available',
    "prize_id" TEXT NOT NULL,
    "raffle_edition_id" TEXT NOT NULL,

    CONSTRAINT "ticket_raffles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket_payments" (
    "id" TEXT NOT NULL,
    "ticket_amount" INTEGER NOT NULL,
    "total_value" DECIMAL(10,2) NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "number" TEXT,

    CONSTRAINT "ticket_payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Extract" (
    "id" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "type" "ExtractType" NOT NULL,
    "ticket_payment_id" TEXT,

    CONSTRAINT "Extract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RaffleTicketPayments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_RaffleTicketPayments_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "_RaffleTicketPayments_B_index" ON "_RaffleTicketPayments"("B");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "raffle_editions" ADD CONSTRAINT "raffle_editions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_raffles" ADD CONSTRAINT "ticket_raffles_prize_id_fkey" FOREIGN KEY ("prize_id") REFERENCES "prizes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_raffles" ADD CONSTRAINT "ticket_raffles_raffle_edition_id_fkey" FOREIGN KEY ("raffle_edition_id") REFERENCES "raffle_editions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extract" ADD CONSTRAINT "Extract_ticket_payment_id_fkey" FOREIGN KEY ("ticket_payment_id") REFERENCES "ticket_payments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RaffleTicketPayments" ADD CONSTRAINT "_RaffleTicketPayments_A_fkey" FOREIGN KEY ("A") REFERENCES "ticket_payments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RaffleTicketPayments" ADD CONSTRAINT "_RaffleTicketPayments_B_fkey" FOREIGN KEY ("B") REFERENCES "ticket_raffles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
