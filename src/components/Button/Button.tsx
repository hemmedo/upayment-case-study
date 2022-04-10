import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
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
