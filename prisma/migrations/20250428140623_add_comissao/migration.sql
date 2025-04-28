-- AlterTable
ALTER TABLE "extracts" ADD COLUMN     "comissao_user_id" TEXT;

-- AddForeignKey
ALTER TABLE "extracts" ADD CONSTRAINT "extracts_comissao_user_id_fkey" FOREIGN KEY ("comissao_user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
