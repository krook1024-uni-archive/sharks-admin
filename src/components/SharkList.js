import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  DeleteButton,
} from "react-admin";

export const SharkList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='name' />
      <ReferenceField source='sharkLevelId' reference='sharklevel'>
        <TextField source='name' />
      </ReferenceField>
      <DeleteButton />
    </Datagrid>
  </List>
);
