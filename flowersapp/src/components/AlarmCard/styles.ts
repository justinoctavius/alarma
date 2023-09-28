import {StyleSheet} from 'react-native';
import {colors} from '../../constants/themes/colors';
import {paddings} from '../../constants/themes/paddings';
import {borderRadius} from '../../constants/themes/borderRadius';
import {fontSizes} from '../../constants/themes/fontSizes';
import {lineHeights} from '../../constants/themes/lineHeights';
import {spacings} from '../../constants/themes/spacings';

export const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    backgroundColor: colors.white,
    padding: paddings.s4,
    gap: 8,
  },
  name: {
    fontSize: 24,
    lineHeight: 27.6,
    color: colors.black,
    fontWeight: '400',
  },
  time: {},
  timeText: {
    fontSize: fontSizes.f6,
    color: colors.black,
    lineHeight: lineHeights.l6,
  },
  bodyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  body: {
    gap: spacings.s1,
  },
  categoryContainer: {
    backgroundColor: colors.secondary,
    padding: 2,
    width: 115,
    alignItems: 'center',
    borderRadius: borderRadius.r2,
  },
  categoryText: {
    fontSize: fontSizes.f2,
    color: colors.black,
    lineHeight: lineHeights.l2,
  },
  songContainer: {
    backgroundColor: colors.secondary,
    padding: spacings.s2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  songText: {
    fontSize: fontSizes.f2,
    color: colors.black,
    lineHeight: lineHeights.l3,
  },
  actionToogle: {
    gap: 4,
  },
});
