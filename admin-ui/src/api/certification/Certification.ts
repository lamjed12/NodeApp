import { User } from "../user/User";

export type Certification = {
  code: string | null;
  createdAt: Date;
  domain: string | null;
  duration: number | null;
  id: string;
  technology: string | null;
  updatedAt: Date;
  user?: Array<User>;
};
