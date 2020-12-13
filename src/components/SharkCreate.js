import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import RichTextInput from "ra-input-rich-text";

export const SharkCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='name' />
      <ReferenceInput source='sharkLevelId' reference='sharklevel'>
        <SelectInput optionText='name' />
      </ReferenceInput>
      <RichTextInput source='description' />
    </SimpleForm>
  </Create>
);
