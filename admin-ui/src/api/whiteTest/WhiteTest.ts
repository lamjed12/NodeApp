import { User } from "../user/User";

export type WhiteTest = {
  code: string;
  createdAt: Date;
  domain: string | null;
  duration: number | null;
  id: string;
  name: string;
  technology: string | null;
  updatedAt: Date;
  user?: Array<User>;
};
