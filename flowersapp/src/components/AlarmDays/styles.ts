import {StyleSheet} from 'react-native';
import {colors} from '../../constants/themes/colors';
import {lineHeights} from '../../constants/themes/lineHeights';
import {fontSizes} from '../../constants/themes/fontSizes';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  day: {
    borderWidth: 2,
    borderRadius: 100,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '700',
    color: colors.black,
    lineHeight: lineHeights.l4,
    fontSize: fontSizes.f3,
  },
});

export const statusStyles = StyleSheet.create({
  selected: {
    borderColor: colors.alarm.green,
  },
  selectedText: {
    color: colors.alarm.green,
  },
  default: {
    borderColor: colors.black,
  },
  defaultText: {
    color: colors.black,
  },
});
