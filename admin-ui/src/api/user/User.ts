import { Certification } from "../certification/Certification";
import { Formation } from "../formation/Formation";
import { JsonValue } from "type-fest";
import { WhiteTest } from "../whiteTest/WhiteTest";

export type User = {
  certifications?: Array<Certification>;
  createdAt: Date;
  email: string;
  firstName: string | null;
  formations?: Array<Formation>;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  whiteTests?: Array<WhiteTest>;
};
