import { WorkingHoursWhereInput } from "./WorkingHoursWhereInput";
import { WorkingHoursOrderByInput } from "./WorkingHoursOrderByInput";

export type WorkingHoursFindManyArgs = {
  where?: WorkingHoursWhereInput;
  orderBy?: Array<WorkingHoursOrderByInput>;
  skip?: number;
  take?: number;
};
