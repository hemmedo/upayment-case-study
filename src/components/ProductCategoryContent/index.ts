import {Product} from '../../service/models';
import {ProductCategoryContent} from './ProductCategoryContent';

export type ProductCategoryContentProps = {
  data: Array<Product> | undefined;
};

export default ProductCategoryContent;
