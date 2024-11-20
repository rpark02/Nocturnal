import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./welcome.style";
import theme from "../../../constants";

const { COLORS, FONTS, SIZES } = theme;
import excitedImage from "../../../assets/images/excited.png";
import goodImage from "../../../assets/images/good.png";
import tiredImage from "../../../assets/images/tired.png";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={[styles.subheadingText, { color: COLORS.darknavy }]}>
          Friday
        </Text>
        <Text style={[styles.regularText, { color: COLORS.darknavy }]}>
          November 15th, 2024
        </Text>
      </View>
      <View style={styles.roundedContainer}>
        <View style={styles.greetingContainer}>
          <View style={styles.greetingTextContainer}>
            <Text style={[styles.headingText, { color: COLORS.magnolia }]}>
              Hi, Rachel!
            </Text>
            <Text style={[styles.regularText, { color: COLORS.magnolia }]}>
              How are you feeling today?
            </Text>
          </View>
          <View style={styles.moodContainer}>
            <TouchableOpacity style={styles.moodButton}>
              <Image source={excitedImage} style={styles.moodImage} />
              <Text style={styles.smallText}>Energized!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.moodButton}>
              <Image source={goodImage} style={styles.moodImage} />
              <Text style={styles.smallText}>Good</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.moodButton}>
              <Image source={tiredImage} style={styles.moodImage} />
              <Text style={styles.smallText}>Exhausted</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
