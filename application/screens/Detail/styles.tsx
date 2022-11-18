import {StyleSheet, Dimensions} from 'react-native';
import {textColor, backgroundColor, activeColor} from '../../assets/Colors';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  body: {
    backgroundColor: backgroundColor,
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  tintImage: {
    width: windowWidth,
    height: windowWidth * 0.56,
    resizeMode: 'cover',
    tintColor: 'rgba(255, 255, 255, 0.3)',
  },
  tabTitle: {
    fontSize: 16,
    fontWeight: '800',
    textTransform: 'uppercase',
    color: textColor,
  },
  hide: {
    display: 'none',
  },
  active: {
    color: activeColor,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: textColor,
    borderBottomWidth: 1,
  },
});

export default styles;
