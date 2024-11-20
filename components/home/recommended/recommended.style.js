import { StyleSheet } from "react-native";
import theme from "../../../constants";

const { COLORS, FONTS, SIZES } = theme;  

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
        marginTop: 25,
    },
    featureContainer: {
        flex: 1,
        alignItems: "center",
    },
    headingText: {
        fontSize: 20,
    },
    subheadingText: {
        fontSize: 18,
    },
    regularText: {
        fontSize: 16,
    },

});

export default styles;