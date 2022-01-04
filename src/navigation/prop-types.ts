import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ScreenNames} from './screen-names';
import {ScreenParamList} from './screen-types';

export type SplashScreenNavigationProp = StackNavigationProp<
  ScreenParamList,
  ScreenNames.SPLASH_SCREEN
>;
export type ProductsScreenNavigationProp = StackNavigationProp<
  ScreenParamList,
  ScreenNames.PRODUCTS
>;

export type CategoriesScreenNavigationProp = StackNavigationProp<
  ScreenParamList,
  ScreenNames.CATEGORIES
>;

export type ProductsScreenRouteProp = RouteProp<
  ScreenParamList,
  ScreenNames.PRODUCTS
>;
