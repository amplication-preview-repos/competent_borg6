import { SortOrder } from "../../util/SortOrder";

export type WorkingHoursOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  hours?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
