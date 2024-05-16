import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { WorkingHoursCreateNestedManyWithoutUsersInput } from "./WorkingHoursCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  email?: string | null;
  name?: string | null;
  role?: "Option1" | null;
  workingHoursItems?: WorkingHoursCreateNestedManyWithoutUsersInput;
};
