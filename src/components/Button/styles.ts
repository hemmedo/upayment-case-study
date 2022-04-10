import { StyleSheet } from 'react-native';
import { boxShadow } from '../../utils/globalStyles';

const styles = StyleSheet.create({
  btnContainer: {
    height: 40,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    ...boxShadow('black', { height: 2, width: 4 }, 8, 0.2),
  },
  txt: {
    fontFamily: 'Avenir-Heavy',
    alignSelf: 'center',
    color: 'white',
    fontSize: 12,
    fontWeight: '900',
    paddingHorizontal: 12,
  },
});

export default styles;
