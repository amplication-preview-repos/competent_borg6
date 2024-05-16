import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
