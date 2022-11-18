import { StyleSheet, Dimensions } from "react-native";
import { textColor, backgroundColor, activeColor } from "../../assets/Colors";

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
        color: textColor
    },
    summary: {
        fontSize: 14,
        marginBottom: 20,
        color:textColor
    },
    subtitle: {
        fontSize: 14,
        color:textColor
    },
    text: {
        fontSize: 14,
        fontWeight: '600',
        color:textColor
    },
    card: {
        marginBottom: 20
    },
    cardSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
})

export default styles