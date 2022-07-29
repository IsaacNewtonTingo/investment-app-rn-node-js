import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUp from '../screens/signup';
import Login from '../screens/login';
import EmailVerification from '../screens/email-verification';
import ResetPassword from '../screens/reset-password';
import NewPassword from '../screens/new-password';
import RegPayment from '../screens/reg-payment';

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

      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          headerTitle: 'Reset passwrod',
        }}
      />

      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{
          headerTitle: 'New passwrod',
        }}
      />

      <Stack.Screen
        name="RegPayment"
        component={RegPayment}
        options={{
          headerTitle: 'Registration fee',
        }}
      />
    </Stack.Navigator>
  );
}
