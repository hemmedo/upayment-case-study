import React from 'react';
import {SafeAreaView} from 'react-native';
import {useQuery} from 'react-query';

import {fetchCategory} from '../../service/http-service';
import {CustomSpinner} from '../../components/CustomSpinner/CustomSpinner';
import {CategoryScreenProps} from '../../navigation/screen-props';
import {Button} from '../../components/Button/Button';
import {ScreenNames} from '../../navigation/screen-names';

const CategoriesScreen = ({navigation}: CategoryScreenProps) => {
  const {isLoading, data} = useQuery('category', () =>
    fetchCategory('personal-care'),
  );

  return (
    <SafeAreaView>
      {data && (
        <Button
          title={data.name}
          onTap={() => navigation.navigate(ScreenNames.PRODUCTS, data)}
        />
      )}
      <CustomSpinner visible={isLoading} />
    </SafeAreaView>
  );
};

export default CategoriesScreen;
