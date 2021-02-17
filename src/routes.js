import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Header from './components/Header';

import Catalog from './pages/Catalog';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: { backgroundColor: '#fefefe' },
      }}
      initialRouteName="Catalog"
    >
      <Stack.Screen
        name="Catalog"
        component={Catalog}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: () => <Header />,
        }}
      />

      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: () => <Header />,
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
          headerBackImage: () => (
            <FeatherIcon name="chevron-left" size={24} color="#e84a38" />
          ),
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
