import { User } from "../user/User";

export type Formation = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  maxCount: string | null;
  startDate: Date | null;
  updatedAt: Date;
  user?: Array<User>;
};
