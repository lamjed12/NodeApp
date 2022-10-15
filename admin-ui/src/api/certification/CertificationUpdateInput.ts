import { UserUpdateManyWithoutCertificationsInput } from "./UserUpdateManyWithoutCertificationsInput";

export type CertificationUpdateInput = {
  code?: string | null;
  domain?: string | null;
  duration?: number | null;
  technology?: string | null;
  user?: UserUpdateManyWithoutCertificationsInput;
};
