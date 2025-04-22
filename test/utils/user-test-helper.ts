import { Profiles } from 'src/prisma/generated/prisma/client';

export type UserTest = {
  name: string;
  email: string;
  cpf: string;
  number: string;
  profile: Profiles;
  comissao?: string | null;
  password: string;
  social_media?: string | null;
  owner_id?: string | null;
};

export const defaultUser: UserTest = {
  name: 'Default User',
  email: 'user@example.com',
  cpf: '11111111111',
  number: '83991758296',
  profile: Profiles.influencer,
  comissao: '0.10',
  password: 'Inova@123',
};

export const defaultOwner: UserTest = {
  name: 'Default owner',
  email: 'owner@example.com',
  cpf: '99999999999',
  number: '83991758296',
  profile: Profiles.owner,
  social_media: null,
  password: 'Inova@123',
};
