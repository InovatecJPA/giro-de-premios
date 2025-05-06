import { Profiles } from "../../src/prisma/generated/prisma/client";

export type UserTest = {
  name: string;
  cpf: string;
  number: string;
  profile: Profiles;
  comissao?: string | null;
  social_media?: string | null;
  owner_id?: string | null;
  credentials: {
    provider: string;
    provider_user_id: string;
    password: string;
  }
};

export const defaultUser: UserTest = {
  name: 'Default User',
  cpf: '11111111111',
  number: '83991758296',
  profile: Profiles.influencer,
  comissao: '0.10',
  credentials: {
    provider: 'email',
    provider_user_id: 'xrztyiqvvbrrrswuel@hthlm.com',
    password: 'Inova@123',
  }
};

export const defaultOwner: UserTest = {
  name: 'Default owner',
  cpf: '99999999999',
  number: '83991758296',
  profile: Profiles.owner,
  social_media: null,
  credentials: {
    provider: 'email',
    provider_user_id: 'fariy85918@firain.com',
    password: 'Inova@123',
  }
};
