import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { InputProps } from '.';
import styles from './styles';

export const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  isMultiLine,
  keyboardType,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtPlaceholder}>{!!value && placeholder}</Text>
      <TextInput
        style={
          isMultiLine
            ? [styles.inputContainer, styles.multilineHeight]
            : styles.inputContainer
        }
        underlineColorAndroid={'transparent'}
        placeholderTextColor="lightgray"
        placeholder={placeholder}
        value={value}
        multiline={isMultiLine}
        numberOfLines={isMultiLine ? 6 : undefined}
        keyboardType={keyboardType}
        textAlignVertical={isMultiLine ? 'top' : 'auto'}
        onChangeText={onChangeText}
      />
    </View>
  );
};
