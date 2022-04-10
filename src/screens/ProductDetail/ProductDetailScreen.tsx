import React, { useState, useRef } from 'react';
import { Product } from '../../service/models';
import { ProductDetailScreenProps } from '../../navigation/screen-props';
import { View, Text, Dimensions, Alert } from 'react-native';
import styles, { getImgStyle } from './styles';
import { Modalize } from 'react-native-modalize';
import ImageZoom from 'react-native-image-pan-zoom';
import Button from '../../components/Button';
import { useMutation } from 'react-query';
import API from '../../service/http-service';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const ProductsScreen = ({ route }: ProductDetailScreenProps) => {
  const navigation = useNavigation();
  const product = route.params as Product;
  const ref = useRef(null);

  const [showHandler, setShowHandler] = useState<number | undefined>(
    height * 0.4,
  );

  const mutation = useMutation(API.deleteProduct, {
    onError: error => {
      mutation.reset();
      Alert.alert('Error', JSON.stringify(error));
    },
    onSuccess: () => {
      navigation.goBack();
    },
  });

  return (
    <>
      <ImageZoom
        cropWidth={width}
        cropHeight={height}
        imageWidth={width}
        imageHeight={height}
      >
        <FastImage
          style={getImgStyle(width)}
          source={{
            uri: product.avatar,
            priority: FastImage.priority.high,
          }}
          resizeMode="contain"
        />
      </ImageZoom>
      <Modalize
        ref={ref}
        withOverlay={false}
        panGestureComponentEnabled={true}
        handleStyle={{ backgroundColor: 'black' }}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        disableScrollIfPossible={false}
        alwaysOpen={showHandler}
        modalHeight={height * 0.4}
        onPositionChange={position => {
          position === 'top' && setShowHandler(60);
        }}
        modalStyle={styles.modalStyle}
        HeaderComponent={
          <View style={styles.titleContainer}>
            <Text style={styles.txtTitle}>{product.name}</Text>
            <Text style={styles.txtPrice}>{'$' + product.price}</Text>
          </View>
        }
        FooterComponent={
          <Button
            onTap={() => mutation.mutate(product?.id)}
            title="Delete Product"
            style={styles.removeBtnContainer}
            titleStyle={styles.txtBtnTitle}
          />
        }
      >
        <Text style={styles.txtDescription}>{product.description}</Text>
      </Modalize>
    </>
  );
};

export default ProductsScreen;
