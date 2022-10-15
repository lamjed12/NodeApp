import { User } from "../user/User";

export type WhiteTest = {
  code: string;
  createdAt: Date;
  domain: string | null;
  duration: number | null;
  id: string;
  language?: "fr" | "English" | "ar" | null;
  name: string;
  technology: string | null;
  updatedAt: Date;
  user?: User | null;
};
