import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CompanyWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  projects?: ProjectListRelationFilter;
  users?: UserListRelationFilter;
};
