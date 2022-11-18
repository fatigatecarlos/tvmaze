import {StyleSheet} from 'react-native';
import {backgroundColor, textColor} from '../../assets/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: backgroundColor,
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  list: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'column',
  },
  text: {
    color: textColor,
    fontSize: 16,
  },
});

export default styles;
