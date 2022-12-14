import { UserUpdateManyWithoutWhiteTestsInput } from "./UserUpdateManyWithoutWhiteTestsInput";

export type WhiteTestUpdateInput = {
  code?: string;
  domain?: string | null;
  duration?: number | null;
  name?: string;
  technology?: string | null;
  user?: UserUpdateManyWithoutWhiteTestsInput;
};
