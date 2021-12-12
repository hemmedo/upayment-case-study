import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  img: {
    width: width * 0.9,
    height: width * 0.4,
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default styles;
