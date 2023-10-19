import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    defaultButton: {
        padding: 8,
        alignItems: 'center',

    },
    buttonPrimary: {
        width: '40%',
        backgroundColor: 'rgb(74, 209, 255)',
        borderRadius: 4,

    },
    buttonOutLine: {
        borderWidth: 1,
        borderColor: 'grey'
    },
    buttonLineText: {
        
    },
    whiteLabel: {
        color: "white",
        fontWeight: "600"
    },
    label: {
        fontWeight:"600"
    },
    lineLabel:{
        textDecorationLine:"underline"
    }
});

export default styles;