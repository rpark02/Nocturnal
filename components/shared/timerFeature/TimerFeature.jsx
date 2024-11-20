import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import theme from "../../../constants/index.js";
import styles from "./timerFeature.style.js";

const { COLORS, FONTS, SIZES } = theme;

const TimerFeature = ({ route }) => {
  const { featureName, time } = route.params; // Access data passed via navigation

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.lavender,
      }}
    >
      <View style={styles.container}>
        <Text style={styles.regularText}>{featureName}</Text>
        <Text style={styles.timerText}>{time}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.roundedContainer}>
            <Text style={styles.subheadingText}>Pause</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundedContainer}>
            <Text style={styles.subheadingText}>End Timer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TimerFeature;
