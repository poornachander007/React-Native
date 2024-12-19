import React from "react";
import AppNavigator from "./navigation/AppNavigator";


const App = () => <AppNavigator />

export default App









//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
// import { Text, TouchableOpacity, View, Alert } from "react-native";
// const App = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>App</Text>
//       <TouchableOpacity
//         onPress={() =>
//           Alert.alert("Alert", "TouchableOpacity Pressed", [
//             { text: "OK" },
//             { text: "Cancel" },
//           ])
//         }
//         style={{
//           width: 100,
//           height: 100,
//           backgroundColor: "red",
//           borderRadius: 20,
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Text>Press Me</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default App;

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

// import { StatusBar } from "expo-status-bar";
// import { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ScrollView,
//   TextInput,
//   Button,
//   Alert,
//   FlatList,
//   Platform,
// } from "react-native";

// import Greeting from "./components/Greeting";
// import Login from "./components/Login";

// const DATA = [
//   { id: "1", title: "First Item" },
//   { id: "2", title: "Second Item" },
//   { id: "3", title: "Third Item" },
//   { id: "4", title: "Fourth Item" },
//   { id: "5", title: "Fifth Item" },
//   { id: "6", title: "Sixth Item" },
// ];

// export default function App() {
//   const [input, setInput] = useState("kala");
//   const [count, setCount] = useState(0);

//   return (
//     <View style={styles.container}>
//       <View style={{ flex: 1, backgroundColor: "red", height: "100vh", width: 100 }}>
//         <Greeting key="1" name="Chitti" />
//         <Greeting key="2" name="Kala" />
//         <Greeting key="3" name="Poorna" />
//       </View>
//       <Text style={styles.welcome}>
//         Welcome to my React Native First Project
//       </Text>
//       <Text style={styles.welcome}>
//         Welcome to my React Native First Project
//       </Text>
//       {/* <Image source={require('./assets/splash-icon.png')} /> */}
//       <Text style={styles.dispalyInput}>{input}</Text>
//       <Image
//         source={{
//           uri: "https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg",
//         }}
//         style={styles.image}
//       />
//       <Login />
//       <View style={styles.flatAndCounterContainer}>
//         <View style={{ flex: 1, backgroundColor: "red",height: 100 }}>
//           <FlatList
//             style={{
//               margin: 2,
//               padding: 0,
//               height: 10,
//               backgroundColor: "green",
//             }}
//             data={DATA}
//             renderItem={({ item }) => <Text>{item.title}</Text>}
//             keyExtractor={(item) => item.id}
//           />
//         </View>
//         <View style={{ flex: 1 }}>
//           <Text>Counter - <Text style={{color:"maroon",fontSize:40,backgroundColor:"yellow"}}>{count}</Text></Text>
//           <Button
//             title="Increment"
//             onPress={() => setCount(count + 1)}
//             color="red"
//           ></Button>
//           <Button
//             title="Decrement"
//             onPress={() => count > 0 ? setCount(count - 1):Alert.alert("Alert", "Count can't be less than 0", [{text:"OK",onPress: () => console.log("OK Pressed")},{text:"Cancel",onPress: () => console.log("Cancel Pressed")}])}
//             color="green"
//           ></Button>
//         </View>
//       </View>

//       <View style={styles.flexContainer}>
//         <View style={styles.box1}></View>
//         <View style={styles.box2}></View>
//         <View style={styles.box3}></View>
//       </View>

//       <ScrollView style={styles.scrollView}>
//         {Array.from({ length: 60 }).map((_, index) => (
//           <Text style={{ margin: 10 }} key={index}>
//             Item {index + 1}
//           </Text>
//         ))}
//       </ScrollView>
//       <StatusBar style="auto" />
//       <TextInput
//         onChangeText={(text) => setInput(text)}
//         style={styles.textInput}
//         placeholder="Type here..."
//       />
//       <Button
//         title="Press Me"
//         onPress={() =>
//           Alert.alert("Alert Title", "My Alert Msg", [
//             { text: "OK", onPress: () => console.log("OK Pressed") },
//             { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
//           ])
//         }
//       />
//     </View>

//   );
// }

// const styles = StyleSheet.create({
//   flatAndCounterContainer:{
//     width: "100%",
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     alignItems: "center",
//     margin: 10,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: Platform.OS === "ios" ? "white" : "black",
//     backgroundColor: Platform.OS === "ios" ? "black" : "#fb8a3c",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   welcome: { color: "cyan" },
//   image: { width: "80%", height: 200, resizeMode: "contain", marginTop: "5%" },
//   scrollView: { flex: 1, paddingX: 10, backgroundColor: "yellow" },
//   textInput: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     paddingHorizontal: 10,
//   },
//   dispalyInput: {
//     color: "white",
//     fontFamily: "monospace",
//     fontWeight: "bold",
//     fontSize: 20,
//     marginTop: "5%",
//   },
//   flexContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//     alignItems: "center",
//     margin: 10,
//   },
//   box1: {
//     width: 30,
//     height: 30,
//     backgroundColor: "white",
//     margin: 5,
//     borderWidth: 2,
//     borderColor: "red",
//   },
//   box2: {
//     width: 30,
//     height: 30,
//     backgroundColor: "green",
//     margin: 5,
//     borderWidth: 2,
//     borderColor: "red",
//   },
//   box3: {
//     width: 30,
//     height: 30,
//     backgroundColor: "blue",
//     margin: 5,
//     borderWidth: 2,
//     borderColor: "red",
//   },
// });
