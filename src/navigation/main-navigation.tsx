import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import ProductsScreen from '../screens/Products/ProductsScreen';
import {ScreenParamList} from './screen-types';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import {ScreenNames} from './screen-names';

const Stack = createStackNavigator<ScreenParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenNames.SPLASH_SCREEN}>
        <Stack.Screen
          name={ScreenNames.SPLASH_SCREEN}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenNames.CATEGORIES}
          component={CategoriesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenNames.PRODUCTS}
          component={ProductsScreen}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
