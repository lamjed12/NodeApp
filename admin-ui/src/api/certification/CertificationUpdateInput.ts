import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CertificationUpdateInput = {
  code?: string | null;
  domain?: string | null;
  duration?: number | null;
  technology?: string | null;
  user?: UserWhereUniqueInput | null;
};
