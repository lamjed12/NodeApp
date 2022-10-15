import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FormationCreateInput = {
  endDate?: Date | null;
  maxCount?: string | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
