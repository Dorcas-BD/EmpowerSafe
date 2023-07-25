import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StatusBar, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

const Home = () => {
  const navigation = useNavigation();

  const handleReportIncident = () => {
    console.log("I'm working");
    navigate();
  };

  const navigate = () => {
    navigation.navigate("ReportIncident");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
          <Image
            source={require("../../assets/Profile_picture.png")}
            style={styles.profileImg}
          />
          <View style={styles.headerGreetings}>
            <Text style={styles.greeting}>Hello, Dorcas</Text>
            <Text style={styles.greetingQuestion}>
              What would you like to do today?
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.notificationContainer}>
            <Text style={styles.notification}>3</Text>
          </View>
          <FontAwesome5Icon
            name="bell"
            solid
            size={30}
            color="rgba(0, 0, 0, 0.3)"
            style={styles.notificationIcon}
          />

          <Image style={styles.notificationIcon} />
        </View>
      </View>

      <View style={styles.boxContainer}>
        <TouchableOpacity
          style={[styles.boxes, styles.box1]}
          onPress={handleReportIncident}
        >
          <Text style={styles.text}>Report an incident</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boxes, styles.box2]}>
          <Text style={styles.text}>Get Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boxes, styles.box3]}>
          <Text style={styles.text}>Educational Resources</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "10%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContainer: {
    flexDirection: "column",
    height: 20,
    alignItems: "center",
    top: 30,
  },
  profileImg: {
    borderColor: "#EF4136",
    borderWidth: 1.5,
    padding: 30,
    borderRadius: 999,
    right: 25,
  },

  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    right: -30,
  },
  greetingQuestion: {
    top: 10,
    right: -30,
  },
  notificationContainer: {
    backgroundColor: "red",
    borderRadius: 10,
    width: 18,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    top: 12,
    right: 10,
  },
  notification: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  notificationIcon: {
    right: 20,
  },

  boxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    marginTop: 20,
    top: 150,
  },
  boxes: {
    borderRadius: 30,
    justifyContent: "center",
    width: 200,
    height: 200,
    margin: 10,
    right: -20,
  },
  box1: {
    backgroundColor: "#0C82EE",
  },
  box2: {
    backgroundColor: "#FF7F50",
  },
  box3: {
    backgroundColor: "#FCF1B5",
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    width: "50%",
    right: -10,
    lineHeight: 25,
  },
});

export default Home;
