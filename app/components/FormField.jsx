import { useFormikContext } from "formik";
import { StyleSheet, Text, TextInput, View } from "react-native";

const FormField = ({ name, ...otherProps }) => {
  const { errors, setFieldValue, values } = useFormikContext();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={values[name]}
        onChangeText={(text) => setFieldValue(name, text)}
        {...otherProps}
      />
      <Text>{errors[name]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: "100%",
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    paddingHorizontal: 10,
  },
});

export default FormField;
