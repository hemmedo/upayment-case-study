import {
  CategoriesScreenNavigationProp,
  ProductsScreenRouteProp,
  SplashScreenNavigationProp,
} from './prop-types';

export type SplashScreenProps = {
  navigation: SplashScreenNavigationProp;
};
export type CategoryScreenProps = {
  navigation: CategoriesScreenNavigationProp;
};

export type ProductsScreenProps = {
  route: ProductsScreenRouteProp;
};
