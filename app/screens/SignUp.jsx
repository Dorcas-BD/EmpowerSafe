import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import * as Yup from "yup";
import FormField from "../components/FormField";
import Form from "../components/Form";
import SubmitButton from "../components/SubmitButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Picker } from "@react-native-picker/picker";
import { Field, useFormikContext } from "formik";

const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .required()
    .trim("Enter first name")
    .label("First name"),
  lastname: Yup.string().required().trim("Enter last name").label("Last name"),
  email: Yup.string()
    .trim()
    .email()
    .required()
    .label("Email")
    .matches(
      /^[\w-\.]+@student\.oauife\.edu\.ng$/i,
      "Enter a valid school email address"
    ),
  phone: Yup.string().trim().required().label("Phone number"),
  secondPhone: Yup.string().trim().label("Second phone number"),
  gender: Yup.string().trim().required().label("Gender"),
  address: Yup.string()
    .trim()
    .required("Enter your school address")
    .label("Address"),
  level: Yup.string().trim().required().label("Level"),
  department: Yup.string().trim().required().label("Department"),
  nextOfKin: Yup.string().trim().required().label("Next of Kin"),
  nextOfKinPhone: Yup.string()
    .trim()
    .required()
    .label("Next of Kin Phone Number"),
  nextOfKinRelationship: Yup.string()
    .trim()
    .required()
    .label("Next of Kin Relationship"),
  dob: Yup.string()
    .trim()
    .required()
    .label("Date of birth")
    .matches(/^\d{2}\/\d{2}\/\d{4}$/i, "Enter a valid date of birth"),
  password: Yup.string()
    .trim()
    .required()
    .min(8, "Password must be at least 8 characters")
    .label("Password"),
  confirmPassword: Yup.string()
    .trim()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .label("Confirm Password"),
});

const SignUp = () => {
  const navigation = useNavigation();

  const handleSignUp = async (values) => {
    const body = { ...values, dob: formatDateOfBirth(values.dob) };
    console.log("I'm working");
    try {
      const response = await fetch(
        "http://192.168.43.76:3000/api/v1/auth/signup",
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) navigation.navigate("VerifyEmail");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = () => {
    navigate("SignIn");
  };

  const formatDateOfBirth = (dob) => {
    console.log(dob);
    const splitDob = dob.split("/");
    const date = new Date(`${splitDob[2]}-${splitDob[1]}-${splitDob[0]}`);
    return date.toISOString();
  };

  const navigate = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Create an Account</Text>
        <Form
          initialValues={{}}
          validationSchema={validationSchema}
          onSubmit={handleSignUp}
        >
          <FormField
            name="firstname"
            label="First Name"
            placeholder="Enter your first name"
          />
          <FormField
            name="lastname"
            label="Last Name"
            placeholder="Enter your last name"
          />
          <FormField
            name="email"
            label="School Email"
            placeholder="Enter your school email address"
          />
          <FormField
            name="phone"
            label="Phone Number"
            placeholder="Enter your phone number"
            keyboardType="numeric"
          />
          <FormField
            name="secondPhone"
            label="Second Phone Number"
            placeholder="Enter your second phone number"
            keyboardType="numeric"
          />
          {/* <View style={styles.pickerContainer}>
            <Text style={styles.label}>Gender</Text>
            <Field>
              {({ field }) => (
                <Picker
                  style={styles.pickerStyle}
                  // selectedValue={value.gender}
                  // onValueChange={handleChange("gender")}
                >
                  <Picker.Item label="Select Gender" value="" />
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                </Picker>
              )}
            </Field>
          </View> */}
          <FormField
            name="gender"
            label="gender"
            placeholder="Enter your gender"
          />
          <FormField name="dob" placeholder="Enter your date of birth" />
          <FormField name="address" placeholder="Enter your hostel address" />
          <FormField name="department" placeholder="Enter your department" />
          <FormField
            name="level"
            placeholder="Enter your level"
            keyboardType="numeric"
          />
          <FormField name="nextOfKinName" placeholder="Next of Kin" />
          <FormField
            name="nextOfKinPhone"
            placeholder="Next of kin Phone Number"
            keyboardType="numeric"
          />
          <FormField
            name="nextOfKinRelationship"
            placeholder="Next of Kin Relationship"
          />
          <FormField name="password" placeholder="Password" secureTextEntry />
          <FormField
            name="confirmPassword"
            placeholder=" Confirm Password"
            secureTextEntry
          />
          <SubmitButton title="Register" />
        </Form>

        <TouchableOpacity onPress={handleSignIn}>
          <Text style={styles.signInText}>
            I already have an account, sign in
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    top: 70,
  },
  title: {
    fontSize: 28,
    // fontWeight: "bold",
    marginBottom: 20,
    top: -30,
  },
  signInText: {
    marginTop: 20,
    color: "#FF7F50",
    marginBottom: 100,
  },
  // pickerContainer: {
  //   width: "100%",
  //   marginBottom: 10,
  // },
  // pickerStyle: {
  //   height: 48,
  //   borderWidth: 1,
  //   borderColor: "gray",
  // },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
});

export default SignUp;
