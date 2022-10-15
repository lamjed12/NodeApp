import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const CertificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Domain" source="domain" />
        <NumberInput step={1} label="Duration" source="duration" />
        <SelectInput
          source="language"
          label="Language"
          choices={[
            { label: "French", value: "fr" },
            { label: "English", value: "en" },
            { label: "Arabic", value: "ar" },
            { label: "Italian", value: "Italian" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Technology" source="technology" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
