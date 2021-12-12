import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  productSelectorContainer: {
    height: 100,
    margin: 10,
  },
  productSelectorItemContainer: {
    height: 46,
    width: 100,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 6,
    marginLeft: 6,
    borderRadius: 10,
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
  },
  itemSelected: {
    backgroundColor: '#0096D6',
  },
  txt: {
    fontFamily: 'Avenir-Heavy',
    alignSelf: 'center',
    color: '#696969',
    fontSize: 12,
    fontWeight: '900',
  },
  txtSelected: {
    color: '#FFFFFF',
  },
});

export default styles;
