import { useFormikContext } from "formik";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    paddingTop: 20,
  },
  button: {
    backgroundColor: "#0C82EE",
    height: 48,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    paddingHorizontal: "35%",
    // right: -10,
    fontSize: 24,
    lineHeight: 50,
  },
});

export default SubmitButton;
