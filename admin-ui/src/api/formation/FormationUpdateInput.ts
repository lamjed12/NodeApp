import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FormationUpdateInput = {
  endDate?: Date | null;
  maxCount?: string | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
