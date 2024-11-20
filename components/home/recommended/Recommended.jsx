import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import FeatureCard from "../../shared/featureCard/FeatureCard";
import styles from "./recommended.style";
import theme from "../../../constants";

const { COLORS, FONTS, SIZES } = theme;

const Recommended = () => {
  const features = [
    {
      name: "NSDR / Yoga Nidra",
      time: "20:00",
    },
    {
      name: "25 min Micro Nap",
      time: "25:00",
    },
    { name: "90 min Nap", 
      time: "90:00" 
    },
    {
      name: "Full Sleep Cycle",
      time: "120:00",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={[styles.regularText, { color: COLORS.darknavy }]}>
        Recommended For You
      </Text>
      <View style={styles.featureContainer}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            featureName={feature.name}
            time={feature.time}
            targetScreen="TimerFeature"
          />
        ))}
      </View>
    </View>
  );
};

export default Recommended;
