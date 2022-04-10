import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useQuery } from 'react-query';

import API from '../../service/http-service';
import { CustomSpinner } from '../../components/CustomSpinner/CustomSpinner';
import CategoryPicker from '../../components/CategoryPicker';
import { Category } from '../../service/models';
import ProductList from '../../components/ProductList';
import AddProductButton from '../../components/AddProductButton';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../navigation/screen-names';

const defaultCategory = {
  id: '0',
  name: 'All',
  createdAt: '',
} as Category;

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setCategory] = useState<Category>(defaultCategory);
  const { isLoading: isLoadingCategories, data: categoriesData } = useQuery(
    'categories',
    () => API.getCategories(),
  );
  const {
    isLoading: isLoadingProducts,
    data: productsData,
    refetch,
  } = useQuery(
    ['products', selectedCategory.name],
    () =>
      API.getProducts(
        selectedCategory.name === 'All' ? '' : selectedCategory.name,
      ),
    {
      cacheTime: 0,
      refetchOnWindowFocus: true,
      enabled: true, // turned off by default, manual refetch is needed
    },
  );

  const isLoading = isLoadingCategories || isLoadingProducts;
  const onSelectedCategoryChange = (item: Category) => {
    setCategory(item);
  };

  useEffect(() => {
    refetch();
  }, [selectedCategory]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      refetch();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <View>
        {categoriesData && (
          <CategoryPicker
            selectedValue={selectedCategory}
            data={categoriesData && [defaultCategory, ...categoriesData]}
            onSelectItem={onSelectedCategoryChange}
          />
        )}
        {productsData && <ProductList data={productsData} />}
        <CustomSpinner visible={isLoading} />
      </View>
      <AddProductButton
        onTap={() => navigation.navigate(ScreenNames.ADD_PRODUCT)}
      />
    </>
  );
};

export default HomeScreen;
