import { CertificationUpdateManyWithoutUsersInput } from "./CertificationUpdateManyWithoutUsersInput";
import { FormationUpdateManyWithoutUsersInput } from "./FormationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WhiteTestUpdateManyWithoutUsersInput } from "./WhiteTestUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  certifications?: CertificationUpdateManyWithoutUsersInput;
  email?: string;
  firstName?: string | null;
  formations?: FormationUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  phoneNumber?: string | null;
  roles?: InputJsonValue;
  username?: string;
  whiteTests?: WhiteTestUpdateManyWithoutUsersInput;
};
