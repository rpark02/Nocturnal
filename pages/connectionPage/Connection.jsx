import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import styles from "./connection.style.js";
import { useNavigation } from "@react-navigation/native";
import theme from "../../constants/index.js";
import Home from "../Home.jsx";

const { COLORS, FONTS, SIZES } = theme;

const Connection = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.lavender,
      }}
    >
      <View style={styles.container}>
        <Text style={[styles.regularText, { textAlign: "center", padding: 5 }]}>
          Click the button below to make sure your sleep mask is connected to
          your device. If connected, the mask should flash white lights.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.roundedContainer}>
            <Text style={styles.subheadingText}>Test</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.roundedContainer}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.subheadingText}>I'm Connected!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Connection;
