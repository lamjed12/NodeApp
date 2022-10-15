import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const WhiteTestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"White Tests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Domain" source="domain" />
        <TextField label="Duration" source="duration" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Technology" source="technology" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
