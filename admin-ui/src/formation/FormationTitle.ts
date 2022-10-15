import { Formation as TFormation } from "../api/formation/Formation";

export const FORMATION_TITLE_FIELD = "maxCount";

export const FormationTitle = (record: TFormation): string => {
  return record.maxCount || record.id;
};
