import { StyleSheet } from "react-native";
import theme from "../../../constants";

const { COLORS, FONTS, SIZES } = theme;   

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
    },
    roundedContainer: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        backgroundColor: COLORS.darkperiwinkle,
        padding: 20,
    },
    dateContainer: {
        justifyContent: "center",
        paddingVertical: 10,
    },
    greetingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    greetingTextContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    moodContainer: {
        width: "100%",
        flex: 1, 
        flexDirection: "row",
        justifyContent: "space-between",
    },
    moodButton: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        backgroundColor: COLORS.periwinkle,
        paddingVertical: 25,
        margin: 5,
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
    smallText: {
        fontSize: 10,
        color: COLORS.darknavy,
    },
    moodImage: {
        width: 70,
        height: 70,
    },
});

export default styles;