import {StyleSheet, Dimensions} from 'react-native';
import {textColor, backgroundColor} from '../../assets/Colors';

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
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: textColor,
  },
  season: {
    fontSize: 12,
    marginBottom: 5,
    color: textColor,
  },
  subtitle: {
    fontSize: 12,
    color: textColor,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    color: textColor,
  },
  summary: {
    fontSize: 14,
    marginTop: 20,
    color: textColor,
  },
  cardSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});

export default styles;
