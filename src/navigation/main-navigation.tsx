import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import { ScreenParamList } from './screen-types';
import { ScreenNames } from './screen-names';
import ProductDetailScreen from '../screens/ProductDetail/ProductDetailScreen';
import AddProductScreen from '../screens/AddProduct/AddProductScreen';
import HeaderTitle from '../components/HeaderTitle';

const Stack = createStackNavigator<ScreenParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenNames.HOME}
        defaultScreenOptions={{ headerBackTitle: 'Back' }}
      >
        <Stack.Screen
          name={ScreenNames.HOME}
          component={HomeScreen}
          options={{
            headerShown: true,
            headerLeft: () => (
              <HeaderTitle label="UPayments Store" isTitle={true} />
            ),
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name={ScreenNames.PRODUCT_DETAIL}
          component={ProductDetailScreen}
          options={{
            headerShown: true,
            headerTitle: () => <HeaderTitle label="Product Detail" />,
          }}
        />
        <Stack.Screen
          name={ScreenNames.ADD_PRODUCT}
          component={AddProductScreen}
          options={{
            headerShown: true,
            headerTitle: () => <HeaderTitle label="Add Product" />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
