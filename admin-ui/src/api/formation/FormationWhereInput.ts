import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type FormationWhereInput = {
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  maxCount?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  user?: UserListRelationFilter;
};
