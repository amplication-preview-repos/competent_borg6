import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { WorkingHoursCreateNestedManyWithoutProjectsInput } from "./WorkingHoursCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  workingHoursItems?: WorkingHoursCreateNestedManyWithoutProjectsInput;
};
