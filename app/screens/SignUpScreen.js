import { Formik } from "formik";
import { StyleSheet } from "react-native";
import React, { useState } from "react";
import AppButton from "../components/AppButton";
import AppFromField from "../components/AppFormField";
import Screen from "../components/Screen";
import * as Yup from "yup";

// const validationSchema = Yup.object().shape({
//   name: Yup.string().min(4).label("Name"),
//   userName: Yup.string().min(4).label("User Name"),
//   password: Yup.string().min(6).label("password"),
//   passwordConfirmation: Yup.string()
//     .oneOf([Yup.ref("password"), null], "Passwords must match")
//     .label("password Confirmation"),
// });

function SignUpScreen(props) {
  const initialFormData = {
    name: "",
    username: "",
    password: "",
    re_password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  // const handleChange = (text) => {
  //   // setFormData((prevState) => {
  //     // return { ...prevState, [event.target.id]: event.target.value };
  //   // });
  //   setFormData({name: text ,username:text, password:text,re_password:text })
  // };

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
        const user = data.id;
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
            // value={formData.name}
            // onChangeText={handleChange}
            onChangeText={(text) => setFormData({ name: text })}
          />

          <AppFromField
            name="username"
            placeholder="User Name"
            icon="account"
            autoCapitalize="none"
            autoCorrect={false}
            // value={formData.username}
            onChangeText={(text) => setFormData({ userName: text })}
            // onChangeText={handleChange}
          />

          <AppFromField
            name="password"
            placeholder="Password"
            autoCapitalize="none"
            icon="lock"
            autoCorrect={false}
            // secureTextEntry
            textContentType="password"
            // value={formData.password}
            onChangeText={(text) => setFormData({ password: text })}
            // onChangeText={handleChange}
          />

          <AppFromField
            name="re_password"
            placeholder="password Confirmation"
            autoCapitalize="none"
            icon="lock"
            autoCorrect={false}
            // secureTextEntry
            textContentType="password"
            // value={formData.re_password}
            onChangeText={(text) => setFormData({ passwordConfirmation: text })}
            // onChange={handleChange}
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
