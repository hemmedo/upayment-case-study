import React from 'react';
import FastImage from 'react-native-fast-image';
import {CategoryBannerProps} from '.';
import styles from './styles';

export const CategoryBanner: React.FC<CategoryBannerProps> = ({imageUrl}) => {
  return (
    <FastImage
      style={styles.img}
      source={{
        uri: imageUrl,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};
