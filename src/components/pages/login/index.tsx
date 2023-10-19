import { View, Text } from 'react-native'
import React, { useState } from 'react'
import LoginComponent from './LoginComponent';
import { useNavigation } from '@react-navigation/native';

export default function LoginContainer() {

  const [email,setEmail] = useState<string>("");
  const navigation = useNavigation();

  const onNext =(name:string)=>{
    navigation.navigate(name)
  }

  return <LoginComponent mail={email} setEmail={setEmail onNext={onNext}}

  />;

}