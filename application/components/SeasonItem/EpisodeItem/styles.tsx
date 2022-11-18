import { StyleSheet } from "react-native";
import { activeColor, inactiveColor } from "../../../assets/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    nameCard: {
        flex: 1,
        marginLeft: 10
    },
    title : {
        fontSize: 14,
        marginBottom: 5,
        fontWeight:'600',
        color: activeColor
    },
    image: {
        width: 100,
        height: 60,
        resizeMode: 'contain',
    },
    ratingTitle: {
        fontSize: 13,
        color: inactiveColor,
    },
    rating: {
        fontSize: 14,
        color: inactiveColor,
        fontWeight:'600'
    },
})

export default styles