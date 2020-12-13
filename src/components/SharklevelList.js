import { DeleteButton, List, Datagrid, TextField } from "react-admin";

export const SharklevelList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='name' />
      <DeleteButton />
    </Datagrid>
  </List>
);
