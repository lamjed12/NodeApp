import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WhiteTestUpdateInput = {
  code?: string;
  domain?: string | null;
  duration?: number | null;
  language?: "fr" | "English" | "ar" | null;
  name?: string;
  technology?: string | null;
  user?: UserWhereUniqueInput | null;
};
