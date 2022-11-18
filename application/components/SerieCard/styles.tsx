import { StyleSheet } from "react-native";
import { textColor } from "../../assets/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 2,
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 150,
        alignSelf: 'center',
        marginBottom: 5,
        resizeMode: 'contain'
    },
    title :{
        fontSize: 16,
        textAlign: 'center',
        color: textColor
    }
})

export default styles