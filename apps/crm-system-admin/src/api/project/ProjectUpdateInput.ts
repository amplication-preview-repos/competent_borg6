import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { WorkingHoursUpdateManyWithoutProjectsInput } from "./WorkingHoursUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  workingHoursItems?: WorkingHoursUpdateManyWithoutProjectsInput;
};
