import { Create, SimpleForm, TextInput } from "react-admin";
import RichTextInput from "ra-input-rich-text";

export const SharklevelCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='name' />
      <RichTextInput source='description' />
    </SimpleForm>
  </Create>
);
