import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import loginStyles from '../../../UI/style/LoginStyle';
import Input from '../../input';

interface LoginProps {
    mail:string
    setEmail:(params:string)=> void;
}


export default function LoginComponent({ mail, setEmail }: LoginProps) {
    console.log("mail adresi",mail)
    return (
        <View style={loginStyles.container}>
            <Image
                resizeMode="contain"
                style={loginStyles.image}
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/5087/5087579.png" }}
            />
            <View style={loginStyles.loginContainer}>

                <Text style={loginStyles.title}>Wissen Academie</Text>
                <Input
                    setValue={setEmail}
                    value={mail}
                    placeholder="E-posta"
                />
                <Input
                setValue={(text)=> console.log("text",text)}
                    placeholder='şifreee'
                />
               
                <TouchableOpacity style={loginStyles.loginButton}>
                    <Text style={loginStyles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}