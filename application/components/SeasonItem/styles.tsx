import {StyleSheet} from 'react-native';
import {
  activeColor,
  inactiveSeasonColor,
  activeTitleColor,
  inactiveColor,
} from '../../assets/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 20,
  },
  seasonButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activeTab: {
    backgroundColor: activeColor,
  },
  inactiveTab: {
    backgroundColor: inactiveSeasonColor,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  titleActive: {
    color: activeTitleColor,
  },
  titleInactive: {
    color: inactiveColor,
  },
});

export default styles;
