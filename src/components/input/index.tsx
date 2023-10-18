import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './style';

interface InputProps{
    value?:string;
    setValue?:(params:string)=>void;
    placeholder:string;
}


export default function Input({
    value,
    setValue,
    placeholder
}:InputProps)
 {
    return (
        <TextInput
            value={value}
            onChangeText={(text) => setValue(text)}
            style={styles.input} 
            placeholder={placeholder}
        />
    )
}