import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import AppButton from "../components/AppButton";
import AppFromField from "../components/AppFormField";
import Screen from "../components/Screen";
import * as Yup from "yup";
import AppPicker from "../components/AppPicker";
import { StyleSheet } from "react-native";
import ImageInputList from "../components/ImageInputList";
import * as Location from "expo-location";
import LocationInputList from "../components/LocationInputList";
import listingsApi from "../api/listings";

const categories = [
  { label: "Camping", value: 1, icon: "camp" },
  { label: "Diving", value: 2, icon: "email" },
  { label: "Hicking", value: 3, icon: "lock" },
];
const validationSchema = Yup.object().shape({
  name: Yup.string().label("Place Name"),
  category: Yup.string().nullable().label("Category"),
  description: Yup.string().label("Description"),
  location: Yup.string().label("Location"),
  state: Yup.string().label("state"),
  gear: Yup.string().label("Gear"),
  images: Yup.array(),
});

function NewList(props) {
  const [category, setCategory] = useState(validationSchema);
  // const location = useLocation();
  // const [uploadVisible, setUploadVisible] = useState(false);
  // const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing) => {
    // setProgress(0);
    // setUploadVisible(true);
    const result = await listingsApi.addListing({ ...listing }, (progress) =>
      setProgress(progress)
    );

    if (!result.ok) {
      // setUploadVisible(false);
      return alert("Could not save the listing");
    }

  };

  return (
    <Screen style={styles.screen}>
      <Formik
        initialValues={{
          category: null,
          description: "",
          location: "",
          gear: "",
          images: [],
          state: "",
          name: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <>
          <ImageInputList name="images" />
          <AppPicker
            selectedItem={category}
            onSelectedItem={(item) => setCategory(item)}
            items={categories}
            icon="apps"
            name="category"
            placeholder="Category"
          />
          <AppFromField
            name="name"
            placeholder="Place Name"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <AppFromField
            name="state"
            placeholder="Country / State"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <AppFromField
            name="description"
            placeholder="Description"
            multiline
            maxLength={300}
          />
          <AppFromField
            name="gear"
            placeholder="Must have gears"
            autoCapitalize="none"
            multiline
            maxLength={300}
            autoCorrect={false}
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
