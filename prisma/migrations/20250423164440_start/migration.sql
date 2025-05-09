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
    "number" TEXT NOT NULL,
    "social_media" TEXT,
    "saldo" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    "comissao" DECIMAL(3,2) NOT NULL DEFAULT 0.00,
    "profile" "Profiles" NOT NULL,
    "owner_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auths" (
    "id" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "password_hash" TEXT,
    "provider_user_id" TEXT NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "auths_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "forgot_password_tokens" (
    "id" TEXT NOT NULL,
    "auth_id" TEXT NOT NULL,
    "password_reset_token" TEXT NOT NULL,
    "password_reset_token_expires" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "forgot_password_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "raffle_editions" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "RaffleEditionStatus" NOT NULL DEFAULT 'pending',
    "total_tickets" INTEGER NOT NULL,
    "winner_tickets" INTEGER NOT NULL,
    "price" DECIMAL(5,2) NOT NULL,
    "raffle_draw_date" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "raffle_editions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prizes" (
    "id" TEXT NOT NULL,
    "prize_name" TEXT NOT NULL,
    "prize_quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prizes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket_raffles" (
    "id" TEXT NOT NULL,
    "raffle_number" BIGINT NOT NULL,
    "status" "TicketRaffleStatus" NOT NULL DEFAULT 'available',
    "prize_id" TEXT,
    "raffle_edition_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ticket_raffles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket_payments" (
    "id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "number" TEXT,
    "discount" DECIMAL(3,2) NOT NULL,
    "total_value" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ticket_payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "extracts" (
    "id" TEXT NOT NULL,
    "amount" BIGINT NOT NULL,
    "type" "ExtractType" NOT NULL,
    "ticket_payment_id" TEXT,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "extracts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiscountRule" (
    "id" TEXT NOT NULL,
    "min_tickets" INTEGER NOT NULL,
    "discount_value" DECIMAL(3,2) NOT NULL,
    "raffle_edition_id" TEXT NOT NULL,

    CONSTRAINT "DiscountRule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_raffle_ticket_payments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_raffle_ticket_payments_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "auths_provider_user_id_key" ON "auths"("provider_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "forgot_password_tokens_password_reset_token_key" ON "forgot_password_tokens"("password_reset_token");

-- CreateIndex
CREATE UNIQUE INDEX "ticket_raffles_raffle_number_raffle_edition_id_key" ON "ticket_raffles"("raffle_number", "raffle_edition_id");

-- CreateIndex
CREATE INDEX "_raffle_ticket_payments_B_index" ON "_raffle_ticket_payments"("B");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auths" ADD CONSTRAINT "auths_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "forgot_password_tokens" ADD CONSTRAINT "forgot_password_tokens_auth_id_fkey" FOREIGN KEY ("auth_id") REFERENCES "auths"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "raffle_editions" ADD CONSTRAINT "raffle_editions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_raffles" ADD CONSTRAINT "ticket_raffles_prize_id_fkey" FOREIGN KEY ("prize_id") REFERENCES "prizes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_raffles" ADD CONSTRAINT "ticket_raffles_raffle_edition_id_fkey" FOREIGN KEY ("raffle_edition_id") REFERENCES "raffle_editions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "extracts" ADD CONSTRAINT "extracts_ticket_payment_id_fkey" FOREIGN KEY ("ticket_payment_id") REFERENCES "ticket_payments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "extracts" ADD CONSTRAINT "extracts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscountRule" ADD CONSTRAINT "DiscountRule_raffle_edition_id_fkey" FOREIGN KEY ("raffle_edition_id") REFERENCES "raffle_editions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_raffle_ticket_payments" ADD CONSTRAINT "_raffle_ticket_payments_A_fkey" FOREIGN KEY ("A") REFERENCES "ticket_payments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_raffle_ticket_payments" ADD CONSTRAINT "_raffle_ticket_payments_B_fkey" FOREIGN KEY ("B") REFERENCES "ticket_raffles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
