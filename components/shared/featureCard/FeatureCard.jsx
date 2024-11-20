import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import styles from "./featureCard.style";
import theme from "../../../constants";
import { useNavigation } from "@react-navigation/native";

const { COLORS, FONTS, SIZES } = theme;

const FeatureCard = ({ featureName, featureImg, time }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.roundedContainer}
      onPress={() => navigation.navigate("TimerFeature", { featureName, time })}
    >
      <Image source={featureImg} style={styles.imageStyle} />
      <View>
        <Text style={[styles.regularText, { color: COLORS.magnolia }]}>
          {featureName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FeatureCard;
