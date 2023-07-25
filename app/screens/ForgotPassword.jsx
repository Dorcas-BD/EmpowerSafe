import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";

const ForgotPassword = () => {
  const [otp, setOtp] = useState("");
  const navigation = useNavigation();

  const handleVerifyOTP = () => {
    navigate();
  };

  const navigate = () => {
    navigation.navigate("CreateNewPassword");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.description}>
        Kindly enter the OTP sent to your mail
      </Text>
      <View style={styles.otpContainer}>
        <TextInput
          style={styles.otpInput}
          value={otp.charAt(0)}
          onChangeText={(text) => setOtp(text)}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={styles.otpInput}
          value={otp.charAt(1)}
          onChangeText={(text) => setOtp(text)}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={styles.otpInput}
          value={otp.charAt(2)}
          onChangeText={(text) => setOtp(text)}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={styles.otpInput}
          value={otp.charAt(3)}
          onChangeText={(text) => setOtp(text)}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={styles.otpInput}
          value={otp.charAt(4)}
          onChangeText={(text) => setOtp(text)}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={styles.otpInput}
          value={otp.charAt(5)}
          onChangeText={(text) => setOtp(text)}
          keyboardType="numeric"
          maxLength={1}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
          <Text style={styles.buttonText}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
  },
  description: {
    fontSize: 18,
    marginBottom: 25,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  otpInput: {
    height: 40,
    width: 40,
    borderWidth: 1.5,
    borderColor: "gray",
    borderRadius: 4,
    marginHorizontal: 9,
    textAlign: "center",
  },
  btnContainer: {
    paddingTop: 30,
  },
  button: {
    backgroundColor: "#0C82EE",
    height: 48,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    paddingHorizontal: "25%",
    right: -20,
    fontSize: 24,
    lineHeight: 50,
  },
});

export default ForgotPassword;
