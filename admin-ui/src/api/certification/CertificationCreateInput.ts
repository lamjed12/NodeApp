import { UserCreateNestedManyWithoutCertificationsInput } from "./UserCreateNestedManyWithoutCertificationsInput";

export type CertificationCreateInput = {
  code?: string | null;
  domain?: string | null;
  duration?: number | null;
  technology?: string | null;
  user?: UserCreateNestedManyWithoutCertificationsInput;
};
