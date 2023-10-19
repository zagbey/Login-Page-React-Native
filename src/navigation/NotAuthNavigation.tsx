
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginContainer from '../components/pages/login';
import RegisterContainer from '../components/pages/register';
import ForgerPasswordContainer from '../components/pages/forgetPassword';

const Stack = createStackNavigator();

export default function NotAuthNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='login' component={LoginContainer} />
            <Stack.Screen name='register'component={RegisterContainer}/>
            <Stack.Screen name='forgotPassword'component={ForgerPasswordContainer}/>
        </Stack.Navigator>
    )
}