import { Formik } from "formik";
import { StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import AppButton from "../components/AppButton";
import AppFromField from "../components/AppFormField";
import Screen from "../components/Screen";
import * as Yup from "yup";
import AuthContext from "../auth/context";

function SignUpScreen(props) {
  const authContext = useContext(AuthContext);
  const initialFormData = {
    name: "",
    username: "",
    password: "",
    re_password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/users/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      if (response.status === 201) {
        setSuccess(true);
        const user = data;
        authContext.setUser(user);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handlePasswordMatch = (event) => {
    if (formData.password !== formData.re_password) {
      setError(true);
    } else {
      setError(false);
    }
  };
  console.log(formData);
  return (
    <Screen style={styles.screen}>
      <Formik
        initialValues={{
          name: "",
          username: "",
          password: "",
          re_password: "",
        }}
        onSubmit={handleSignUp}
        initialFormData={initialFormData}
      >
        <>
          <AppFromField
            name="name"
            placeholder="Name"
            autoCapitalize="none"
            autoCorrect={false}

            onChangeText={(text) => setFormData({...formData, name: text })}
          />

          <AppFromField
            name="username"
            placeholder="User Name"
            icon="account"
            autoCapitalize="none"
            autoCorrect={false}

            onChangeText={(text) => setFormData({...formData, username: text })}

          />

          <AppFromField
            name="password"
            placeholder="Password"
            autoCapitalize="none"
            icon="lock"
            autoCorrect={false}
            secureTextEntry
            textContentType="password"
        
            onChangeText={(text) => setFormData({ ...formData,password: text })}
     
          />

          <AppFromField
            name="re_password"
            placeholder="re_password"
            autoCapitalize="none"
            icon="lock"
            autoCorrect={false}
            secureTextEntry
            textContentType="password"
            onChangeText={(text) => setFormData({...formData, re_password: text })}
            onBlur={handlePasswordMatch}
          />

          <AppButton color="tomato" title="sign up" onPress={handleSignUp} />
        </>
      </Formik>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});

export default SignUpScreen;
