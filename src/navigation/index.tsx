import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AuthNavigation from './AuthNavigation';
import NotAuthNavigation from './NotAuthNavigation';


const Stack = createStackNavigator();

export default function NavigationPage() {
  const isLogin: boolean = false;
  return (
    <NavigationContainer>
      {
        isLogin ?
          <AuthNavigation />
          : <NotAuthNavigation />
      }
    </NavigationContainer>
  )
}