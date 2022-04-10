import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 4,
  },
  inputContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 12,
    fontSize: 12,
    minHeight: 40,
  },
  multilineHeight: {
    minHeight: 120,
    paddingTop: 12,
  },
  txtPlaceholder: {
    fontFamily: 'Avenir-Heavy',
    color: 'gray',
    fontSize: 12,
    paddingBottom: 6,
    paddingLeft: 10,
  },
});

export default styles;
