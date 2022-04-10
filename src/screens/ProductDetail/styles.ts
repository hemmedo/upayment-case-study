import { StyleSheet } from 'react-native';

export const getImgStyle = (width: number) => {
  return {
    width,
    height: width,
  };
};

const styles = StyleSheet.create({
  img: {
    resizeMode: 'contain',
    flex: 1,
    aspectRatio: 1, // Your aspect ratio
  },
  txtTitle: {
    fontFamily: 'Avenir-Heavy',
    textAlign: 'left',
    color: 'white',
    fontSize: 19,
    fontWeight: '900',
  },
  txtPrice: {
    fontFamily: 'Avenir-Heavy',
    textAlign: 'right',
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
    bottom: 4,
  },
  txtDescription: {
    fontFamily: 'Avenir-Heavy',
    color: 'white',
    fontSize: 14,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  modalStyle: {
    backgroundColor: 'black',
    paddingHorizontal: 15,
    paddingTop: 25,
  },
  removeBtnContainer: {
    width: '40%',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  txtBtnTitle: {
    color: 'black',
  },
});

export default styles;
