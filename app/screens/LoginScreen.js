import React, { useContext, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import * as Yup from "yup";
import AuthContext from "../auth/context";
import AppFormField from "../components/AppFormField";
import Form from "../components/Form";
import ErrorMessage from "../components/ErrorMessage";


const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(2).label("Name"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);
  const [formData, setFormData] = useState(validationSchema);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const API_ENDPOINT = "http://127.0.0.1:8000/token/login";
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      
      const user = data.auth_token;
      console.log(user)
      if(!user) return setLoginFailed(true)
      setLoginFailed(false)
      authContext.setUser(user);
      
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(formData);
  // console.log(formData._nodes);
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email or password."
          visible={loginFailed}
        />

        <>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            label="name"
            placeholder="Name"
            onChangeText={(text) => setFormData({ ...formData, name: text })}
 
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            label="password"
            icon="lock"
            placeholder="Password"
            textContentType="password"
            secureTextEntry
            onChangeText={(text) =>
              setFormData({ ...formData, password: text })
            }
          />

          <AppButton title="Login" color="pink" onPress={handleSubmit} />
        </>
      </Form>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
export default LoginScreen;
