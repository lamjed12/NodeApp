import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CertificationWhereInput = {
  code?: StringNullableFilter;
  domain?: StringNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  language?: "fr" | "en" | "ar" | "Italian";
  technology?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
