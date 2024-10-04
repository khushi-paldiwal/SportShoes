import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import MidSection from "./src/components/MidSection";

export default function App() {
  return (
    <View>
      <Header />
      <MidSection />
    </View>
  );
}
