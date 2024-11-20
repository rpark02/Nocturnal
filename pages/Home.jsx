import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Welcome from "../components/home/welcome/Welcome.jsx";
import Recommended from "../components/home/recommended/Recommended.jsx";
import theme from "../constants/index.js";

const { COLORS, FONTS, SIZES } = theme;  

const Home = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", backgroundColor: COLORS.lavender }}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 25 }}>
        <Welcome />
        <Recommended />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;