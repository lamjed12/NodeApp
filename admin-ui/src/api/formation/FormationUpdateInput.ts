import { UserUpdateManyWithoutFormationsInput } from "./UserUpdateManyWithoutFormationsInput";

export type FormationUpdateInput = {
  endDate?: Date | null;
  maxCount?: string | null;
  startDate?: Date | null;
  user?: UserUpdateManyWithoutFormationsInput;
};
