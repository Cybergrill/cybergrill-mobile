import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import RootStack from './src/stacks/RootStack';
import { theme } from './src/theme/theme';
import { CheckoutProvider } from './src/contexts/Checkout';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <CheckoutProvider>
          <RootStack />
        </CheckoutProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
