import { StyleSheet } from "react-native";
import theme from "../../constants";

const { COLORS, FONTS, SIZES } = theme;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 25,
  },
  roundedContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: COLORS.darkperiwinkle,
    padding: 20,
    margin: 10,
  },
  buttonContainer: {
    width: "90%",
    alignItems: "center",
    marginTop: 40,
  },
  headingText: {
    fontSize: 20,
  },
  subheadingText: {
    fontSize: 18,
    color: COLORS.magnolia,
  },
  regularText: {
    fontSize: 16,
    color: COLORS.darknavy,
  },
  timerText: {
    fontSize: 60,
    color: COLORS.darkblue,
  },
  logoImage: {
    height: 100,
    width: 350,
  },
});

export default styles;