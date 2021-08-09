import { useFormikContext } from "formik";
import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ErrorMessage from "./ErrorMessage";
import ImageInput from "./ImageInput";

function ImageInputList({name}) {
const [imageUris, setImageUris] = useState([]);
const { errors, touched } = useFormikContext();


  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
      <>
    <ScrollView horizontal>
      <View style={styles.container}>
        {imageUris.map((uri) => (
          <View key={uri} style={styles.image}>
            <ImageInput
              imageUri={uri}
              onChangeImage={() => handleRemove(uri)}
            />
          </View>
        ))}
        <ImageInput onChangeImage={(uri) => handleAdd(uri)} />
      </View>
      
    </ScrollView>
    <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
