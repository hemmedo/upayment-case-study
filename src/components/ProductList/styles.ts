import { Dimensions, StyleSheet } from 'react-native';
import { boxShadow } from '../../utils/globalStyles';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  productContainer: {
    flex: 0.48,
  },
  img: {
    width: width * 0.33,
    height: width * 0.33,
  },
  imageContainer: {
    borderRadius: 8,
    height: width * 0.45,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    ...boxShadow('black', { height: 10, width: 10 }, 10, 0.1),
  },
  txt: {
    fontFamily: 'Avenir-Heavy',
    textAlign: 'left',
    fontSize: 12,
    fontWeight: '900',
  },
  productNameTxt: {
    paddingTop: 10,
    paddingBottom: 4,
    color: '#696969',
  },
  priceTxt: {
    color: '#000000',
    paddingTop: 4,
    fontSize: 14,
  },
  container: {
    paddingBottom: 100,
    paddingHorizontal: 15,
    flexGrow: 1,
    justifyContent: 'center',
  },
  columnWrapper: { marginVertical: 20, justifyContent: 'space-between' },
});

export default styles;
