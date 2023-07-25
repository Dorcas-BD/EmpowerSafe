import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { Form } from "formik";
import FormField from "../components/FormField";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().trim("Enter Email").label("Email"),
});

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    navigate("Home");
  };

  const handleSignUp = () => {
    navigate("SignUp");
  };
  const handleForgotPassword = () => {
    navigate("ForgotPassword");
  };

  const navigation = useNavigation();

  const navigate = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Email Verified</Text>
      <Text style={styles.title}>Sign In</Text>
      {/* <Form
        initialValues={{}}
        validationSchema={validationSchema}
        onSubmit={handleSignIn}
      >
        <FormField
          name="email"
          label="School Email"
          placeholder="Enter school email"
        />
        <FormField
          name="password"
          placeholder="Enter your password"
          secureTextEntry
        />
        <SubmitButton title="Sign In" />
      </Form> */}
      <TextInput
        style={styles.input}
        placeholder="Email address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handleSignIn}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>
      <Text style={styles.signUpText}>
        I don't have an account yet,
        <Text style={styles.signUpLink} onPress={handleSignUp}>
          {" "}
          sign up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    bottom: 50,
    marginBottom: 30,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 25,
    width: "100%",
  },
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
    right: -20,
    fontSize: 24,
    lineHeight: 50,
  },
  forgotPasswordText: {
    color: "#FF7F50",
    marginTop: 15,
    fontSize: 20,
  },
  signUpText: {
    marginTop: 10,
    fontSize: 20,
  },
  signUpLink: {
    color: "#FF7F50",
  },
});

export default SignIn;
