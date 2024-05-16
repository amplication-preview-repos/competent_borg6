import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WorkingHoursWhereInput = {
  date?: DateTimeNullableFilter;
  hours?: IntNullableFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
