import React from 'react';
import {Text, FlatList, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ProductCategoryContentProps} from '.';
import {Product} from '../../service/models';
import styles from './styles';

export const ProductCategoryContent: React.FC<ProductCategoryContentProps> = ({
  data,
}) => {
  const _renderItem = ({item, index}: {item: Product; index: number}) => {
    return (
      <View style={styles.productContainer} key={index}>
        <View style={styles.imageContainer}>
          <FastImage
            style={styles.img}
            source={{
              uri: item.imageUrl,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <Text style={[styles.txt, styles.brandTxt]}>{item.brand.name}</Text>
        <Text
          style={[styles.txt, styles.productNameTxt]}
          numberOfLines={2}
          ellipsizeMode="middle">
          {item.name}
        </Text>
        <Text style={[styles.txt, styles.priceTxt]}>{item.price + ' €'}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      numColumns={2}
      renderItem={_renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.children}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};
