import { ProjectCreateNestedManyWithoutCompaniesInput } from "./ProjectCreateNestedManyWithoutCompaniesInput";
import { UserCreateNestedManyWithoutCompaniesInput } from "./UserCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  address?: string | null;
  name?: string | null;
  projects?: ProjectCreateNestedManyWithoutCompaniesInput;
  users?: UserCreateNestedManyWithoutCompaniesInput;
};
