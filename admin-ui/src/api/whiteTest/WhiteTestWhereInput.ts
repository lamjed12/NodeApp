import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type WhiteTestWhereInput = {
  code?: StringFilter;
  domain?: StringNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  technology?: StringNullableFilter;
  user?: UserListRelationFilter;
};
