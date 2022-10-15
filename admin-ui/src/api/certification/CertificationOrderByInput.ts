import { SortOrder } from "../../util/SortOrder";

export type CertificationOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  domain?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  technology?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
