import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Button,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function VerifyEmail() {
  const navigation = useNavigation();

  const handleVerifyEmail = () => {
    navigate();
  };

  const navigate = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/verifyEmail.png")}
        style={styles.imageStyle}
      />
      <Text style={styles.heroText}>
        A verification link have been sent to empsafe@gmail.com. {"\n"}Click on
        'Verify Your Email' or check your inbox to verify!
      </Text>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPress={handleVerifyEmail}>
          <Text style={styles.buttonText}>Verify Your Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  btnContainer: {
    paddingTop: 50,
  },
  button: {
    backgroundColor: "#0C82EE",
    paddingHorizontal: "30%",
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageStyle: {
    bottom: 100,
    right: 26,
    width: "50%",
  },
  heroText: {
    // fontFamily: "Cochin",
    fontSize: 30,
    lineHeight: 35,
    width: "78%",
    bottom: 20,
  },
});

export default VerifyEmail;
