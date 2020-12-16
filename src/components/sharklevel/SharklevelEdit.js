import { Edit, SimpleForm, TextInput } from "react-admin";
import RichTextInput from "ra-input-rich-text";

export const SharklevelEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source='name' />
      <RichTextInput source='description' />
    </SimpleForm>
  </Edit>
);
