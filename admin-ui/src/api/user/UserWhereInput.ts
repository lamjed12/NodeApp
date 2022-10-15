import { CertificationListRelationFilter } from "../certification/CertificationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FormationListRelationFilter } from "../formation/FormationListRelationFilter";
import { WhiteTestListRelationFilter } from "../whiteTest/WhiteTestListRelationFilter";

export type UserWhereInput = {
  certifications?: CertificationListRelationFilter;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  formations?: FormationListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  username?: StringFilter;
  whiteTests?: WhiteTestListRelationFilter;
};
