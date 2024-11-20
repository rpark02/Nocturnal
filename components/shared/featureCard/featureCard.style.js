import { StyleSheet } from "react-native";
import theme from "../../../constants";

const { COLORS, FONTS, SIZES } = theme;

const styles = StyleSheet.create({
    roundedContainer: {
        width: "100%",
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        backgroundColor: COLORS.darkperiwinkle,
        padding: 20,
        margin: 10,
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