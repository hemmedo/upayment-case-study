import React from 'react';
import { Text, Pressable } from 'react-native';
import { AddProductButtonProps } from '.';
import styles from './styles';

export const AddProductButton: React.FC<AddProductButtonProps> = ({
  onTap,
}) => {
  return (
    <Pressable style={styles.btnLogin} onPress={() => onTap()}>
      <Text style={styles.btnText}>＋</Text>
    </Pressable>
  );
};
