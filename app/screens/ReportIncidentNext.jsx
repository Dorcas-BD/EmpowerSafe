import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

const ReportIncidentNext = () => {
  const [isReportingForSelf, setIsReportingForSelf] = useState(true);
  const [victimName, setVictimName] = useState("");
  const [knowsOffender, setKnowsOffender] = useState(true);
  const [offenderName, setOffenderName] = useState("");
  const [incidentType, setIncidentType] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [location, setLocation] = useState("");

  const handleIsReportingChange = (value) => {
    setIsReportingForSelf(value === "Yes");
  };

  const handleVictimNameChange = (text) => {
    setVictimName(text);
  };

  const handleKnowsOffenderChange = (value) => {
    setKnowsOffender(value === "Yes");
  };

  const handleOffenderNameChange = (text) => {
    setOffenderName(text);
  };

  const handleIncidentTypeChange = (value) => {
    setIncidentType(value);
  };

  const handleDateSelection = () => {
    setShowDatePicker(true);
  };

  const handleDatePickerChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleTimeSelection = () => {
    setShowTimePicker(true);
  };

  const handleTimePickerChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  const handleLocationChange = (text) => {
    setLocation(text);
  };
  const handleNext = () => {
    navigate();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report an Incident</Text>
      <Text style={styles.label}>Are you reporting for yourself?</Text>
      <Picker
        style={styles.picker}
        selectedValue={isReportingForSelf ? "Yes" : "No"}
        onValueChange={handleIsReportingChange}
      >
        <Picker.Item label="Yes" value="Yes" />
        <Picker.Item label="No" value="No" />
      </Picker>

      {!isReportingForSelf && (
        <>
          <Text style={styles.label}>Name of Victim</Text>
          <TextInput
            style={styles.input}
            value={victimName}
            onChangeText={handleVictimNameChange}
          />
        </>
      )}

      <Text style={styles.label}>Do you know the offender?</Text>
      <Picker
        style={styles.picker}
        selectedValue={knowsOffender ? "Yes" : "No"}
        onValueChange={handleKnowsOffenderChange}
      >
        <Picker.Item label="Yes" value="Yes" />
        <Picker.Item label="No" value="No" />
      </Picker>

      {knowsOffender ? (
        <>
          <Text style={styles.label}>Name of Offender</Text>
          <TextInput
            style={styles.input}
            value={offenderName}
            onChangeText={handleOffenderNameChange}
          />
        </>
      ) : (
        <Text style={styles.label}>Unknown</Text>
      )}

      <Text style={styles.label}>Type of incident</Text>
      <Picker
        style={styles.picker}
        selectedValue={incidentType}
        onValueChange={handleIncidentTypeChange}
      >
        <Picker.Item label="Select type of incident" value="" />
        <Picker.Item label="Type 1" value="Type 1" />
        <Picker.Item label="Type 2" value="Type 2" />
        {/* Add more incident types as needed */}
      </Picker>

      <Text style={styles.label}>Date of incident</Text>
      <TouchableOpacity onPress={handleDateSelection}>
        <Text style={styles.input}>{date.toDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="calendar"
          onChange={handleDatePickerChange}
        />
      )}

      <Text style={styles.label}>Time of incident (Approximate)</Text>
      <TouchableOpacity onPress={handleTimeSelection}>
        <Text style={styles.input}>
          {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </Text>
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display="clock"
          onChange={handleTimePickerChange}
        />
      )}

      <Text style={styles.label}>Location of incident</Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={handleLocationChange}
      />

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handleNext}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    top: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
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
  picker: {
    backgroundColor: "gray",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  title: {
    // flex: 1,
    fontSize: 28,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    // top: -30,
  },
});

export default ReportIncidentNext;
