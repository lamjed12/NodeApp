import { UserCreateNestedManyWithoutFormationsInput } from "./UserCreateNestedManyWithoutFormationsInput";

export type FormationCreateInput = {
  endDate?: Date | null;
  maxCount?: string | null;
  startDate?: Date | null;
  user?: UserCreateNestedManyWithoutFormationsInput;
};
