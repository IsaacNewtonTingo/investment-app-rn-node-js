import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigators/auth-stack';

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
