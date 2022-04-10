import React from 'react';
import { Text, FlatList, Pressable } from 'react-native';
import { CategoryPickerProps } from '.';
import { Category } from '../../service/models';
import styles from './styles';

export const CategoryPicker: React.FC<CategoryPickerProps> = ({
  data,
  selectedValue,
  onSelectItem,
}) => {
  const _renderItem = ({ item, index }: { item: Category; index: number }) => {
    const isSelected = selectedValue && selectedValue.id == item.id;
    return (
      <Pressable
        style={
          isSelected
            ? [styles.productSelectorItemContainer, styles.itemSelected]
            : styles.productSelectorItemContainer
        }
        onPress={() => {
          onSelectItem(item);
        }}
        key={index}
      >
        <Text
          style={isSelected ? [styles.txt, styles.txtSelected] : styles.txt}
        >
          {item.name}
        </Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={data}
      horizontal={true}
      renderItem={_renderItem}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
    />
  );
};
