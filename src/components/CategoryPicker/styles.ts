import { StyleSheet } from 'react-native';
import { boxShadow } from '../../utils/globalStyles';

const styles = StyleSheet.create({
  productSelectorContainer: {
    margin: 10,
  },
  productSelectorItemContainer: {
    height: 40,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    ...boxShadow('black', { height: 2, width: 4 }, 8, 0.2),
  },
  itemSelected: {
    backgroundColor: 'white',
    borderWidth: 2,
    bottom: 4,
    borderColor: 'black',
    ...boxShadow('black', { height: 4, width: 8 }, 8, 0.4),
  },
  txt: {
    fontFamily: 'Avenir-Heavy',
    alignSelf: 'center',
    color: 'white',
    fontSize: 12,
    fontWeight: '900',
    paddingHorizontal: 12,
  },
  txtSelected: {
    color: 'black',
  },
});

export default styles;
