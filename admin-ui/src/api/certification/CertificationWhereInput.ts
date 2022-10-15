import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CertificationWhereInput = {
  code?: StringNullableFilter;
  domain?: StringNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  technology?: StringNullableFilter;
  user?: UserListRelationFilter;
};
