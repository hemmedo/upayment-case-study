import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenNames } from './screen-names';
import { ScreenParamList } from './screen-types';

export type HomeScreenNavigationProp = StackNavigationProp<
  ScreenParamList,
  ScreenNames.HOME
>;

export type ProductDetailScreenNavigationProp = StackNavigationProp<
  ScreenParamList,
  ScreenNames.PRODUCT_DETAIL
>;

export type AddProductScreenNavigationProp = StackNavigationProp<
  ScreenParamList,
  ScreenNames.ADD_PRODUCT
>;

export type ProductDetailScreenRouteProp = RouteProp<
  ScreenParamList,
  ScreenNames.PRODUCT_DETAIL
>;
