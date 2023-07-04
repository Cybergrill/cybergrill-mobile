import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../pages/Home';
import Detail from '../../pages/Detail';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
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
    </Stack.Navigator>
  );
};

export default RootStack;
