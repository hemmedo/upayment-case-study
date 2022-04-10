import React from 'react';
import { Text, FlatList, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ProductListProps } from '.';
import { Product } from '../../service/models';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../navigation/screen-names';

export const ProductList: React.FC<ProductListProps> = ({ data }) => {
  const navigation = useNavigation();

  const _renderItem = ({ item, index }: { item: Product; index: number }) => {
    return (
      <Pressable
        style={styles.productContainer}
        key={index}
        onPress={() => navigation.navigate(ScreenNames.PRODUCT_DETAIL, item)}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 2 }}
          colors={['white', 'lightgray', 'gray']}
          style={styles.imageContainer}
        >
          <FastImage
            style={styles.img}
            source={{
              uri: item.avatar,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </LinearGradient>

        <Text style={[styles.txt, styles.productNameTxt]}>{item.name}</Text>
        <Text style={[styles.txt, styles.priceTxt]}>{'$' + item.price}</Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={data}
      numColumns={2}
      renderItem={_renderItem}
      columnWrapperStyle={styles.columnWrapper}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};
