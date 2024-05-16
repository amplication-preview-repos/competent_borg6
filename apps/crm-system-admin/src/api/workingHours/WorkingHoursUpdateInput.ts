import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WorkingHoursUpdateInput = {
  date?: Date | null;
  hours?: number | null;
  project?: ProjectWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
