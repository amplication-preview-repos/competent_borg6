import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { WorkingHoursTitle } from "../workingHours/WorkingHoursTitle";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="company.id" reference="Company" label="Company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="workingHoursItems"
          reference="WorkingHours"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkingHoursTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
