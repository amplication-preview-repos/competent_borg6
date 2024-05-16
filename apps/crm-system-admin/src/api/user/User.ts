import { Company } from "../company/Company";
import { WorkingHours } from "../workingHours/WorkingHours";

export type User = {
  company?: Company | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  role?: "Option1" | null;
  updatedAt: Date;
  workingHoursItems?: Array<WorkingHours>;
};
