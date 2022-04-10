import { StyleSheet } from 'react-native';
import { boxShadow } from '../../utils/globalStyles';

const styles = StyleSheet.create({
  txtLabel: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 16,
  },
  txtTitle: {
    fontSize: 20,
    fontFamily: 'Avenir-HeavyOblique',
    ...boxShadow('black', { height: 2, width: 2 }, 10, 1),
    paddingLeft: 10,
  },
});

export default styles;
