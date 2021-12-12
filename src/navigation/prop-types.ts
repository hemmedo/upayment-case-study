import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ScreenParamList} from './screen-types';

export type SplashScreenNavigationProp = StackNavigationProp<
  ScreenParamList,
  'SplashScreen'
>;
export type ProductsScreenNavigationProp = StackNavigationProp<
  ScreenParamList,
  'Products'
>;

export type CategoriesScreenNavigationProp = StackNavigationProp<
  ScreenParamList,
  'Categories'
>;

export type ProductsScreenRouteProp = RouteProp<ScreenParamList, 'Products'>;
