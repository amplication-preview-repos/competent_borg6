import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { WorkingHoursListRelationFilter } from "../workingHours/WorkingHoursListRelationFilter";

export type UserWhereInput = {
  company?: CompanyWhereUniqueInput;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  role?: "Option1";
  workingHoursItems?: WorkingHoursListRelationFilter;
};
