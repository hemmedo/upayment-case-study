import React from 'react';
import {Text, FlatList, Pressable} from 'react-native';
import {ProductCategoryPickerProps} from '.';
import {SubCategory} from '../../service/models';
import styles from './styles';

export const ProductCategoryPicker: React.FC<ProductCategoryPickerProps> = ({
  data,
  selectedValue,
  onSelectItem,
}) => {
  const _renderItem = ({item, index}: {item: SubCategory; index: number}) => {
    const isSelected = selectedValue && selectedValue.id === item.id;
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
        key={index}>
        <Text
          style={isSelected ? [styles.txt, styles.txtSelected] : styles.txt}>
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
      style={styles.productSelectorContainer}
      showsHorizontalScrollIndicator={false}
    />
  );
};
