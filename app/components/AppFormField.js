import React from "react";
import { Text } from "react-native";
import ErrorMessage from "./ErrorMessage";
import {useFormikContext} from 'formik'
import AppTextInput from "./AppTextInput";
function AppFormField({ name, width, ...otherProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      <AppTextInput
        // onBlur={() => setFieldTouched(name)}
        // onChangeText={(text) => setFieldValue(name, text)}
        // value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
