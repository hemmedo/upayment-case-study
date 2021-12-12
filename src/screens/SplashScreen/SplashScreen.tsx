import React from 'react';
import {ImageBackground} from 'react-native';
import {SplashScreenProps} from '../../navigation/screen-props';
import styles from './styles';

const SplashScreen = ({navigation}: SplashScreenProps) => {
  navigateToCategories();
  async function performTimeConsumingTask() {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 3000),
    );
  }
  async function navigateToCategories() {
    await performTimeConsumingTask();
    navigation.navigate('Categories');
  }
  return (
    <ImageBackground
      resizeMode="contain"
      source={require('../../images/arive_logo.png')}
      style={styles.container}
    />
  );
};

export default SplashScreen;
