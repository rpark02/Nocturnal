import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import theme from "../../constants/index.js";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/images/logo.png";
import styles from "./welcomePage.style.js";

const { COLORS, FONTS, SIZES } = theme;

const WelcomePage = () => {
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
        <Image source={logo} style={styles.logoImage} />
        <Text style={styles.regularText}>Take control of your sleep</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.roundedContainer}>
            <Text style={styles.subheadingText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundedContainer}>
            <Text style={styles.subheadingText}>Sign Up </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomePage;
