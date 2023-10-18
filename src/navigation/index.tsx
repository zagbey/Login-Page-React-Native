import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginContainer from '../components/pages/login';


const Stack = createStackNavigator();

export default function NavigationPage() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='login' component={LoginContainer}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}