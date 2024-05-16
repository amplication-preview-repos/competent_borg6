import { Company } from "../company/Company";
import { WorkingHours } from "../workingHours/WorkingHours";

export type Project = {
  company?: Company | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  workingHoursItems?: Array<WorkingHours>;
};
