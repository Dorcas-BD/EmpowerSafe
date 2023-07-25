import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function GetStarted() {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    console.log("Getting started....");
    navigate();
  };

  const navigate = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/getStarted.png")}
        style={styles.imageStyle}
      />
      <Text style={styles.heroText}>
        Empower safe (EmpSafe) helps you to get the support that you need
        against every form of sexual abuse.{"\n"}
        {"\n"}Lorem Ipsum dolor avec lorem ipsum avec lorem ipsum avec
      </Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Getting Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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

export default GetStarted;
