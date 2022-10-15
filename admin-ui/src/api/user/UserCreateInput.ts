import { CertificationCreateNestedManyWithoutUsersInput } from "./CertificationCreateNestedManyWithoutUsersInput";
import { FormationCreateNestedManyWithoutUsersInput } from "./FormationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WhiteTestCreateNestedManyWithoutUsersInput } from "./WhiteTestCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  certifications?: CertificationCreateNestedManyWithoutUsersInput;
  email: string;
  firstName?: string | null;
  formations?: FormationCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  phoneNumber?: string | null;
  roles: InputJsonValue;
  username: string;
  whiteTests?: WhiteTestCreateNestedManyWithoutUsersInput;
};
