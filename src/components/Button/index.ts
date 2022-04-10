import { Button } from './Button';

export type ButtonProps = {
  onTap: () => void;
  title: string;
  style?: object;
  titleStyle?: object;
};

export default Button;
