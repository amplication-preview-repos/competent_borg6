import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { WorkingHoursTitle } from "../workingHours/WorkingHoursTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="company.id" reference="Company" label="Company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <SelectInput
          source="role"
          label="Role"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="workingHoursItems"
          reference="WorkingHours"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkingHoursTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
