import { SortOrder } from "../../util/SortOrder";

export type CertificationOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  domain?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  technology?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
