import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CustomSpinner} from '../components/CustomSpinner/CustomSpinner';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import ProductsScreen from '../screens/Products/ProductsScreen';
import {ScreenParamList} from './screen-types';
import SplashScreen from '../screens/SplashScreen/SplashScreen';

const Stack = createStackNavigator<ScreenParamList>();

function App() {
  const fetching = false;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{headerShown: false, title: 'Categories'}}
        />
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
      <CustomSpinner visible={fetching} />
    </NavigationContainer>
  );
}

export default App;
