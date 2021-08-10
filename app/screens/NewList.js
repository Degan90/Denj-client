import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import AppButton from "../components/AppButton";
import AppFromField from "../components/AppFormField";
import Screen from "../components/Screen";
import * as Yup from "yup";
import AppPicker from "../components/AppPicker";
import {  StyleSheet } from "react-native";
import ImageInputList from "../components/ImageInputList";
import * as Location from "expo-location";
import LocationInputList from "../components/LocationInputList";
import listingsApi from "../api/listings";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/FormImagePicker";
import AsyncStorage from '@react-native-async-storage/async-storage';


const categories = [
  { label: "Camping", value: 1, icon: "camp" },
  { label: "Diving", value: 2, icon: "snorkeling" },
  { label: "Hicking", value: 3, icon: "lock" },
];
const validationSchema = Yup.object().shape({
  name: Yup.string().label("Place Name"),
  category: Yup.string().nullable().label("Category"),
  location: Yup.string().label("Location"),
  state: Yup.string().label("state"),
  gears: Yup.string().label("Gear"),
  caption: Yup.string().label("Description"),
  images: Yup.array(),
});
const initialData = {
  name: "",
  category: "",
  // location: "",
  state: "",
  gears: "",
  caption: "",
  image: [],
};

function NewList({route}) {
  const [formData, setFormData] = useState(initialData);
  

  // const [uploadVisible, setUploadVisible] = useState(false);
  // const [progress, setProgress] = useState(0);


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const API_ENDPOINT = "http://127.0.0.1:8000/denjs/";
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          // "Authorization": `Token ${await AsyncStorage.getItem('token')}`,
     
        },
      });
      const data = await response.json();
      console.log(data)
      // setFormData(data)
    } catch (err) {
      console.log(err);
    }
  };
  // const getDenjPlaces = async () => {
  //   try {
  //     const response = await fetch("http://127.0.0.1:8000/denjs/");
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getDenjPlaces();
  // }, []);


  // const handleSubmit = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('Token');
  //     console.log(value);
  //     if (value !== null) {
  //       // We have data!!
        
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //   }
  // };
  console.log(formData);

  // const [uploadVisible, setUploadVisible] = useState(false)
//   const [formData, setFormData] = useState(initialData);
//   const [progress, setProgress] = useState(0);

//   const handleSubmit = async (listing, { resetForm }) => {
//     // setProgress(0);
//     // setUploadVisible(true);
//     const result = await listingsApi.addListing(
//       { ...listing },
//       // (progress) => setProgress(progress)
//     );
// console.log(result)
//     if (!result.ok) {
//       // setUploadVisible(false);
//       return alert("Could not save the listing");
//     }else{
//       alert('Success')
//     }

//     resetForm();
//   };


  return (
    <Screen style={styles.screen}>
      <Formik
        initialValues={{
          name: "",
          category: "",
          // location: "",
          state: "",
          gears: "",
          caption: "",
          image: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <>
          <ImageInputList
            name="images"
            // onChangeImage={(uri) => setFormData({ ...formData, image: [...image,uri] })}
            // onChangeImage={(uri) => handleAdd(uri)}
            formData={formData}
            setFormData={setFormData}
          />
          <AppPicker
            selectedItem={formData.category}
            onSelectedItem={(item) => setFormData({ ...formData, category: item.label })}
            items={categories}
            icon="apps"
            name="category"
            placeholder="Category"
            // PickerItemComponent={CategoryPickerItem}
            // onChangeText={(text) =>
            //   setFormData({ ...formData, category: category })
            // }
          />
          {/* <AppFromField
            name="category"
            placeholder="category"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setFormData({ ...formData, category: text })}
          /> */}
          <AppFromField
            name="name"
            placeholder="Place Name"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
          />
          <AppFromField
            name="state"
            placeholder="Country / State"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setFormData({ ...formData, state: text })}
          />
          <AppFromField
            name="description"
            placeholder="Description"
            multiline
            maxLength={300}
            onChangeText={(text) => setFormData({ ...formData, caption: text })}
          />
          <AppFromField
            name="gears"
            placeholder="Must have gears"
            autoCapitalize="none"
            multiline
            maxLength={300}
            autoCorrect={false}
            onChangeText={(text) => setFormData({ ...formData, gears: text })}
          />

          <AppButton color="tomato" title="Post" onPress={handleSubmit} />
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
export default NewList;
