import { Project } from "../project/Project";
import { User } from "../user/User";

export type Company = {
  address: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  projects?: Array<Project>;
  updatedAt: Date;
  users?: Array<User>;
};
