import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WhiteTestUpdateInput = {
  code?: string;
  domain?: string | null;
  duration?: number | null;
  name?: string;
  technology?: string | null;
  user?: UserWhereUniqueInput | null;
};
