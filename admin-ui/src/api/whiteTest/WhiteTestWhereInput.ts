import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WhiteTestWhereInput = {
  code?: StringFilter;
  domain?: StringNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  language?: "fr" | "English" | "ar";
  name?: StringFilter;
  technology?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
