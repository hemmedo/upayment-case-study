import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ButtonProps } from '.';
import styles from './styles';

export const Button: React.FC<ButtonProps> = ({
  onTap,
  title,
  style,
  titleStyle,
}) => {
  return (
    <TouchableOpacity
      style={style ? [styles.btnContainer, style] : styles.btnContainer}
      onPress={onTap}
    >
      <Text style={titleStyle ? [styles.txt, titleStyle] : styles.txt}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
