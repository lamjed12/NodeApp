import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CertificationCreateInput = {
  code?: string | null;
  domain?: string | null;
  duration?: number | null;
  language?: "fr" | "en" | "ar" | "Italian" | null;
  technology?: string | null;
  user?: UserWhereUniqueInput | null;
};
