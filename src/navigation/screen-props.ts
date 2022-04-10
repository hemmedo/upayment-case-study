import {
  ProductDetailScreenRouteProp,
  HomeScreenNavigationProp,
  AddProductScreenNavigationProp,
} from './prop-types';

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

export type ProductDetailScreenProps = {
  route: ProductDetailScreenRouteProp;
};

export type AddProductScreenProps = {
  route: AddProductScreenNavigationProp;
};
