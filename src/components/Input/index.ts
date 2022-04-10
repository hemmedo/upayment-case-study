import { KeyboardTypeOptions } from 'react-native';
import { Input } from './Input';

export type InputProps = {
  value: string;
  placeholder: string;
  isMultiLine?: boolean;
  keyboardType?: KeyboardTypeOptions;
  onChangeText: (text: string) => void;
};

export default Input;
