import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const CreateNewPassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSavePassword = () => {
    console.log("Saving password...");
    console.log("Old Password:", oldPassword);
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Password</Text>
      <Text style={styles.subTitle}>Create a new unique password</Text>
      <Text style={styles.description}>Enter your old password</Text>
      <TextInput
        style={styles.input}
        placeholder="Old Password"
        value={oldPassword}
        onChangeText={setOldPassword}
        secureTextEntry
      />
      <Text style={styles.description}>Enter your new password</Text>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />
      <Text style={styles.description}>Confirm your new password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    paddingHorizontal: "26%",
    bottom: 30,
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 20,
    paddingHorizontal: "24%",
    bottom: 30,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: "100%",
  },
  btnContainer: {
    paddingTop: 50,
  },
  button: {
    backgroundColor: "#0C82EE",
    height: 48,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    paddingHorizontal: "30%",
    right: -30,
    fontSize: 24,
    lineHeight: 50,
  },
});

export default CreateNewPassword;
