import { Category } from '../../service/models';
import { CategoryPicker } from './CategoryPicker';

export type CategoryPickerProps = {
  selectedValue: Category | undefined;
  data: Array<Category> | undefined;
  onSelectItem: (itemValue: Category) => void;
};

export default CategoryPicker;
