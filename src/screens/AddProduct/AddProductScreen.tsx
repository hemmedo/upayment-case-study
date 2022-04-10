import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import CategoryPicker from '../../components/CategoryPicker';
import API from '../../service/http-service';
import Input from '../../components/Input';
import { Category } from '../../service/models';
import { CustomSpinner } from '../../components/CustomSpinner/CustomSpinner';
import { Alert, Text } from 'react-native';
import styles from './styles';
import { CapitalFirstLetter, isImage } from '../../utils/stringUtils';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

const AddProductScreen = () => {
  const navigation = useNavigation();
  const [productTitle, setProductTitle] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [imageLink, setImageLink] = useState<string>('');
  const [selectedCategory, setCategory] = useState<Category>();

  const { isLoading, data: categoriesData } = useQuery('categories', () =>
    API.getCategories(),
  );

  const mutation = useMutation(API.addProduct, {
    onError: error => {
      mutation.reset();
      Alert.alert('Error', JSON.stringify(error));
    },
    onSuccess: () => {
      navigation.goBack();
    },
  });

  const onSelectedCategoryChange = (item: Category) => {
    setCategory(item);
  };

  const tryAddProduct = () => {
    if (!productTitle || !price || !description || !imageLink) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    const priceAsNumber = parseFloat(price);
    if (isNaN(priceAsNumber)) {
      Alert.alert('Error', 'Price should be a number');
      return;
    }
    if (!isImage(imageLink)) {
      Alert.alert('Error', 'Image link is not correct');
      return;
    }
    if (!selectedCategory) {
      Alert.alert('Error', 'Please select a category');
      return;
    }
    const product = {
      name: productTitle,
      price: priceAsNumber,
      category: selectedCategory.name,
      description,
      avatar: imageLink,
      developerEmail: 'm.nafihyalim@gmail.com',
    };
    mutation.mutate(product);
  };

  return (
    <>
      <ScrollView>
        <Input
          value={productTitle}
          onChangeText={text => setProductTitle(text)}
          placeholder={'Product Title'}
        />
        <Input
          value={price}
          onChangeText={text => setPrice(text)}
          keyboardType="numeric"
          placeholder={'Price'}
        />
        <Input
          value={description}
          onChangeText={text => setDescription(text)}
          placeholder={'Description'}
          isMultiLine={true}
        />
        <Input
          value={imageLink}
          onChangeText={text => setImageLink(text)}
          placeholder={'Image Link'}
        />
        <Text style={styles.txtSelectedCategory}>
          {'Selected Category: ' +
            (selectedCategory ? CapitalFirstLetter(selectedCategory.name) : '')}
        </Text>
        <CategoryPicker
          selectedValue={selectedCategory}
          data={categoriesData}
          onSelectItem={onSelectedCategoryChange}
        />
      </ScrollView>
      <Button
        onTap={() => tryAddProduct()}
        title="Add Product"
        style={styles.addBtnContainer}
      />
      <CustomSpinner visible={isLoading} />
    </>
  );
};

export default AddProductScreen;
