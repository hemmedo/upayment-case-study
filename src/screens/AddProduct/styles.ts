import { StyleSheet } from 'react-native';

export const getImgStyle = (width: number) => {
  return {
    width,
    height: width,
  };
};

const styles = StyleSheet.create({
  txtSelectedCategory: {
    marginVertical: 12,
    marginLeft: 15,
    fontFamily: 'Avenir-Heavy',
    fontSize: 16,
    color: 'black',
  },
  addBtnContainer: {
    width: '40%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
  },
});

export default styles;
