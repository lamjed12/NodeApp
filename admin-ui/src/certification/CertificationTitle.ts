import { Certification as TCertification } from "../api/certification/Certification";

export const CERTIFICATION_TITLE_FIELD = "code";

export const CertificationTitle = (record: TCertification): string => {
  return record.code || record.id;
};
