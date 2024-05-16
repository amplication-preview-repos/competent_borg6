import { WorkingHours as TWorkingHours } from "../api/workingHours/WorkingHours";

export const WORKINGHOURS_TITLE_FIELD = "id";

export const WorkingHoursTitle = (record: TWorkingHours): string => {
  return record.id?.toString() || String(record.id);
};
