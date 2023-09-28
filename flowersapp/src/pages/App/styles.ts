import {StyleSheet} from 'react-native';
import {colors} from '../../constants/themes/colors';
import {lineHeights} from '../../constants/themes/lineHeights';

export const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: 10,
    color: colors.black,
    lineHeight: lineHeights.l2,
    textAlign: 'center',
    width: '100%',
  },
  tabBarIconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  tabBarItemStyle: {
    width: 77,
    height: 80,
    justifyContent: 'space-between',
  },
  tabBarStyle: {backgroundColor: colors.primary},
});
