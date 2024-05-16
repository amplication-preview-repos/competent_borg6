import { ProjectUpdateManyWithoutCompaniesInput } from "./ProjectUpdateManyWithoutCompaniesInput";
import { UserUpdateManyWithoutCompaniesInput } from "./UserUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  address?: string | null;
  name?: string | null;
  projects?: ProjectUpdateManyWithoutCompaniesInput;
  users?: UserUpdateManyWithoutCompaniesInput;
};
