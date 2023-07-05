import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../pages/Home';
import Detail from '../../pages/Detail';
import Cart from '../../pages/Cart';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'CyberGrill' }}
      />

      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: 'Detalhes',
          headerBackTitleVisible: false,
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          title: 'Carrinho',
          headerBackTitleVisible: false,
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
