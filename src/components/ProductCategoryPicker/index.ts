import {SubCategory} from '../../service/models';
import {ProductCategoryPicker} from './ProductCategoryPicker';

export type ProductCategoryPickerProps = {
  selectedValue: SubCategory | null;
  data: Array<SubCategory>;
  onSelectItem: (itemValue: SubCategory) => void;
};

export default ProductCategoryPicker;
