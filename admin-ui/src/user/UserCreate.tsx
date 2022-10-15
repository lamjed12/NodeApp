import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  PasswordInput,
} from "react-admin";

import { CertificationTitle } from "../certification/CertificationTitle";
import { FormationTitle } from "../formation/FormationTitle";
import { WhiteTestTitle } from "../whiteTest/WhiteTestTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="certifications"
          reference="Certification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CertificationTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <ReferenceArrayInput
          source="formations"
          reference="Formation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FormationTitle} />
        </ReferenceArrayInput>
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="Phone Number" source="phoneNumber" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
        <ReferenceArrayInput
          source="whiteTests"
          reference="WhiteTest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WhiteTestTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
