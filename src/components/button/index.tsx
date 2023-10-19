import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style';

type Varianst = "primary" | "outline" | "lineText"
//intercade butonuma 3 adet parametre alıyorum
// label butonun içinde yazacak stringi veriyor 
//variant butonun type ı 
//onPres butona tıklanınca ne yapıcağını 
interface ButtonProps {
    label?: string;
    variant?: Varianst;
    onPress: () => void;
}



//bu namede olan değişkenlerim var git buttonaPROSTAN KONTRO LET BENİ UYAR 
//değişkenlerime default değerler verdim bana biri label göndermesse undefined basmamamak için boş tanımdalık diğereleri de aynı şekilde 
export default function Button({ label = "", onPress = () => console.log(), variant = "primary" }: ButtonProps) {
    const buttonStyle = {
        primary: {
            text: styles.whiteLabel,
            button: styles.buttonPrimary
        },
        outline: {
            text: styles.label,
            button: styles.buttonOutLine
        },
        lineText: {
            text: styles.lineLabel,
            button: styles.buttonLineText
        }
    }
    //benim varyantım neyse buttonS tyle içinden gidip o name deki objeyi bulsun getirsin  
    const variantButtonStyle = buttonStyle[variant];
    return (
        <TouchableOpacity onPress={onPress} style={[styles.defaultButton, variantButtonStyle.button]}>
            <Text style={variantButtonStyle.text}>
                {
                    label
                }
            </Text>
        </TouchableOpacity>
    )
}