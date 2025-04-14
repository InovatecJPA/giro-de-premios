import { Decimal } from "@prisma/client/runtime/library";
import { Exclude, Expose } from "class-transformer";
import { IsDecimal } from "class-validator";

@Exclude()
export class ResponseUserDTO {
    @Expose()
    id: string;
    
    @Expose()
    name: string;
    
    @Expose()
    cpf: string;
    
    @Expose()
    email: string;
    
    @Expose()
    number: string;
    
    @Expose()
    social_media?: string | null;

    @IsDecimal()
    saldo: Decimal;

    @IsDecimal()
    comissao: Decimal;

    @Expose()
    profile: string;
    
    @Expose()
    owner_id?: string | null;
}