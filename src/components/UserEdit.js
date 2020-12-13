import { Edit, SimpleForm, TextInput, PasswordInput } from "react-admin";

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source='username' />
      <PasswordInput source='password' />
      <TextInput source='email' />
    </SimpleForm>
  </Edit>
);
