import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={() =>
        navigation.navigate("Details", { itemId: 42, otherParam: "Hello!" })
      }
    />
    <Button
      style={styles.button}
      title="Go to Map"
      onPress={() => navigation.navigate("Map")}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "dodgerblue",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    marginTop: 10,
  },
});

export default HomeScreen;
