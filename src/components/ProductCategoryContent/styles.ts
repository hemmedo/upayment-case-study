import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  productContainer: {
    width: width * 0.4,
    marginRight: 12,
    marginLeft: 12,
    marginBottom: 20,
  },
  img: {
    width: width * 0.3,
    height: width * 0.3,
  },
  imageContainer: {
    borderRadius: 8,
    width: '100%',
    height: width * 0.4,
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  children: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  txt: {
    fontFamily: 'Avenir-Heavy',
    textAlign: 'left',
    fontSize: 12,
    fontWeight: '900',
  },
  brandTxt: {
    paddingTop: 10,
    paddingBottom: 4,
    color: '#A9A9A9',
  },
  productNameTxt: {
    color: '#696969',
  },
  priceTxt: {
    color: '#000000',
    paddingTop: 4,
    fontSize: 14,
  },
});

export default styles;
