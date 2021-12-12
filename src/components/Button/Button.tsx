import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from './styles';

interface ButtonProps {
  title?: string;
  onTap: Function;
  fontSize?: number;
}

export const Button: React.FC<ButtonProps> = ({title, onTap, fontSize}) => {
  return (
    <Pressable style={styles.btnLogin} onPress={() => onTap()}>
      <Text style={[styles.btnText, {fontSize}]}>{title}</Text>
    </Pressable>
  );
};
