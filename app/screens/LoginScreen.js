import React, { useContext, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import { Formik } from "formik";
import * as Yup from "yup";
import authApi from "../api/auth";
import jwtDecode from "jwt-decode";
import useAuth from "../auth/useAuth";
import AuthContext from "../auth/context";
import AppFormField from "../components/AppFormField";
import Form from "../components/Form";
import ErrorMessage from "../components/ErrorMessage";
import storage from "../auth/storage";
const validationSchema = Yup.object().shape({
  name: Yup.string(),
  password: Yup.string(),
});

function LoginScreen() {
  const authContext = useContext(AuthContext);
  // const [loginFailed, setLoginFailed] = useState(false);

  // const handleChange = (text) => {
  //   // setFormData((prevState) => {
  //   //   return { ...prevState, [event.target.id]: event.target.value };
  //   // });
  //   authContext.setUser({name: text , password:text })
  // };

  // const handleSubmit = async ({ name, password }) => {
  //   const result = await authApi.login(name, password);
  //   // if (!result.ok) return setLoginFailed(true);
  //   // setLoginFailed(false);

  //   const user =result.data.auth_token
  //   console.log(result.data)
  //   authContext.setUser(user)
  // };
  // const initialFormData = {
  //   name: "",
  //   password: "",
  // };

  const [formData, setFormData] = useState(validationSchema);
  const handleChange = (text) => {
    // setFormData((prevState) => {
      // return { ...prevState, [event.target.id]: event.target.value };
    // });
    setFormData({name: text , password:text })
  };
	// const handleChange = (event) => {
	// 	setFormData((prevState) => {
  //     console.log(event.target.value)
	// 		return { ...prevState, [id]: event.target.value };
	// 	});
	// };

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
      // console.log(data);
      // console.log(data.non_field_errors[0])
      const user = data.auth_token;
      authContext.setUser(user);
      
    } catch (err) {
      console.log(err);
    }
  };
  console.log(formData);
  console.log(formData._nodes)
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {/* <ErrorMessage
          error="Invalid email or password."
          // visible={loginFailed}
        /> */}

        <>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            label="name"
            placeholder="Name"
            // value={formData.name.value}
						// onChange={handleChange}
            // onChangeText={(text) => setFieldValue(name, text)}
            // value={formData.name}
            // onChangeText={text => setFormData({ name: text })}
            // onChangeText={(text) => authContext.setUser({name: text})}
            onChangeText={handleChange}
           
          /> 
           <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            label="password"
            icon="lock"
            placeholder="Password"
            textContentType="password"
            // secureTextEntry={true}
            // value={formData.password.value}
						// onChange={handleChange}
            // value={formData.password}
            // onChangeText={text => setFormData({ password: text })}
            // onChangeText={(text) => authContext.setUser( {password:text})}
            onChangeText={handleChange}

        
          />
          {/* <TextInput
            placeholder="Name"
            name="name"
            autoCapitalize="none"
            autoCorrect={false}
            value={formData}
            // onChangeText={(text) => setFormData(name, text)}
             onChangeText={(text) => setFieldValue(name, text)}
          />
          <TextInput
            placeholder="password"
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            value={formData.password}
            onChangeText={(text) => setFormData(password,text)}
          /> */}

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
