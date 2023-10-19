import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import loginStyles from '../../../UI/style/LoginStyle';
import Input from '../../input';
import Button from '../../button';

interface LoginProps {
    //mailin type string olucak 
    //
    mail: string
    setEmail: (params: string) => void;
    onNext:(name:string)=>void;
}


export default function LoginComponent({ mail, setEmail,onNext }: LoginProps) {
    // console.log("mail adresi", mail)
    
    return (
        <View style={loginStyles.container}>
            <Image
                resizeMode="contain"
                style={loginStyles.image}
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/5087/5087579.png" }}
            />
            <View style={loginStyles.loginContainer}>

                <Text style={loginStyles.title}>Wissen Academia</Text>
                <Input
                    setValue={setEmail}
                    value={mail}
                    placeholder="E-posta"
                />
                <Input
                    setValue={(text) => console.log("şifre", text)}
                    placeholder='şifre'
                    />
                
                <Button variant='lineText' onPress={() => onNext("forgotPassword")}
                        label='FargotPassword'
                        />
                <Button
                    variant='primary'
                    onPress={() => console.log("girdi1")}
                    label='login'
                    />
                <Button
                variant='outline'
                    onPress={() => onNext("register")}
                    label='Register'
                />
            </View>
        </View>
    )
}