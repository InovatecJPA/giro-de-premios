import { Profiles } from "@prisma/client";

export interface UserCreateData {
    name: string;
    cpf: string;
    number: string;
    social_media?: string;
    comissao: string;
    saldo: bigint;
    profile: Profiles;
}