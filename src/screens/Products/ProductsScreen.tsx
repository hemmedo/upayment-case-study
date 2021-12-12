import React, {useState} from 'react';
import ProductCategoryPicker from '../../components/ProductCategoryPicker';
import ProductCategoryContent from '../../components/ProductCategoryContent';
import {Category, SubCategory} from '../../service/models';
import {fetchProducts} from '../../service/http-service';
import {useEffect} from 'react';
import {useQuery} from 'react-query';
import {CustomSpinner} from '../../components/CustomSpinner/CustomSpinner';
import CategoryBanner from '../../components/CategoryBanner';
import {ProductsScreenProps} from '../../navigation/screen-props';

const ProductsScreen = ({route}: ProductsScreenProps) => {
  const category = route.params as Category;

  const defaultSubCategory =
    category.subCategories.find(
      subCategory => subCategory.id === 'all-products',
    ) || category.subCategories[0];

  const [selectedProductCategory, setProductCategory] =
    useState<SubCategory>(defaultSubCategory);

  const {isLoading, data, refetch} = useQuery(
    ['subCategoryId', selectedProductCategory.id],
    () => fetchProducts(selectedProductCategory.id),
    {
      cacheTime: 0,
      refetchOnWindowFocus: false,
      enabled: false, // turned off by default, manual refetch is needed
    },
  );

  useEffect(() => {
    refetch();
  }, [selectedProductCategory, refetch]);

  const onSelectedProductChange = (item: SubCategory) => {
    setProductCategory(item);
  };

  return (
    <>
      <CategoryBanner imageUrl={category.imageUrl} />
      <ProductCategoryPicker
        selectedValue={selectedProductCategory}
        data={category.subCategories}
        onSelectItem={onSelectedProductChange}
      />
      <ProductCategoryContent data={data} />
      <CustomSpinner visible={isLoading} />
    </>
  );
};

export default ProductsScreen;
