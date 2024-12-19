import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const DetailsScreen = ({ route, navigation }) => {
  const { itemId, otherParam } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>Other Param: {otherParam}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "dodgerGreen",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default DetailsScreen;
