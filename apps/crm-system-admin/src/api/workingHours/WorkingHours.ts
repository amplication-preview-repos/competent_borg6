import { Project } from "../project/Project";
import { User } from "../user/User";

export type WorkingHours = {
  createdAt: Date;
  date: Date | null;
  hours: number | null;
  id: string;
  project?: Project | null;
  updatedAt: Date;
  user?: User | null;
};
