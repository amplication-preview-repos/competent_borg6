import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { WorkingHoursListRelationFilter } from "../workingHours/WorkingHoursListRelationFilter";

export type ProjectWhereInput = {
  company?: CompanyWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  workingHoursItems?: WorkingHoursListRelationFilter;
};
