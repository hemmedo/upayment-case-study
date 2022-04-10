import { Product } from '../../service/models';
import { ProductList } from './ProductList';

export type ProductListProps = {
  data: Array<Product> | undefined;
};

export default ProductList;
