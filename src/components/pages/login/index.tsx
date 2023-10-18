import { View, Text } from 'react-native'
import React, { useState } from 'react'
import LoginComponent from './LoginComponent';

export default function LoginContainer() {

  const [email,setEmail] = useState<string>("");

  return <LoginComponent mail={email} setEmail={setEmail}

  />;

}