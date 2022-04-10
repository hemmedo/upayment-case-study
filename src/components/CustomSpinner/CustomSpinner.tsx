import React from 'react';
import { Modal, View, ActivityIndicator } from 'react-native';
import styles from './styles';

export const CustomSpinner = ({ visible }: { visible: boolean }) => {
  return (
    <Modal visible={visible} animationType={'none'} transparent={true}>
      <View style={styles.container}>
        <View style={styles.spinnerContainer}>
          <ActivityIndicator color={'#FFFFFF'} size={'large'} />
        </View>
      </View>
    </Modal>
  );
};
