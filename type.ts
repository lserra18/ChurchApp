/* eslint-disable prettier/prettier */
type User = {
  id: number;
  name?: string;
  email: string;
};

type UserProfile = User & {
  photo: string;
};

const userPartial: Partial<User> = {};

const userRequired: Required<User> = {};

const nameAgeMap: Record<string, number> = {
  Alice: 21,
  Bob: 25,
};
