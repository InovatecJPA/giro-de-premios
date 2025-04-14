import { Profiles } from "@prisma/client";

export interface UserCreateData {
    name: string;
    cpf: string;
    email: string;
    number: string;
    social_media?: string;
    hashed_password: string;
    comissao: string;
    saldo: number;
    profile: Profiles;
}