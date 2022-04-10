import React from 'react';
import { Text } from 'react-native';
import { HeaderTitleProps } from '.';
import styles from './styles';

export const HeaderTitle: React.FC<HeaderTitleProps> = ({ label, isTitle }) => {
  return (
    <Text
      style={isTitle ? [styles.txtLabel, styles.txtTitle] : styles.txtLabel}
    >
      {label}
    </Text>
  );
};
