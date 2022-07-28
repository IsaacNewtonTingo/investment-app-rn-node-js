import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUp from '../screens/signup';
import Login from '../screens/login';
import EmailVerification from '../screens/email-verification';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerTitle: 'Create account',
        }}
      />

      <Stack.Screen name="Login" component={Login} options={{}} />

      <Stack.Screen
        name="EmailVerification"
        component={EmailVerification}
        options={{
          headerTitle: 'Email verification',
        }}
      />
    </Stack.Navigator>
  );
}
