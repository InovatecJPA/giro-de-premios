import { Profiles } from "src/prisma/generated/prisma/client";

export type UserCreateData = {
    name: string;
    cpf: string;
    number: string;
    social_media?: string;
    comissao: string;
    profile: Profiles;
}