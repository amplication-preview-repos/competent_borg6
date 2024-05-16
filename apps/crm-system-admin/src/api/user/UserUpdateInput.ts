import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { WorkingHoursUpdateManyWithoutUsersInput } from "./WorkingHoursUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  email?: string | null;
  name?: string | null;
  role?: "Option1" | null;
  workingHoursItems?: WorkingHoursUpdateManyWithoutUsersInput;
};
