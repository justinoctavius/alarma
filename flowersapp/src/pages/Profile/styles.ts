import {StyleSheet} from 'react-native';
import {spacings} from '../../constants/themes/spacings';
import {colors} from '../../constants/themes/colors';
import {fontSizes} from '../../constants/themes/fontSizes';
import {lineHeights} from '../../constants/themes/lineHeights';
import {borderRadius} from '../../constants/themes/borderRadius';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: spacings.s4,
    gap: spacings.s4,
  },
  profilePicture: {
    alignItems: 'center',
    gap: spacings.s4,
  },
  name: {
    color: colors.black,
    fontSize: fontSizes.f3,
    lineHeight: lineHeights.l4,
  },
  infoContainer: {
    gap: spacings.s4,
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  infoText: {
    fontSize: fontSizes.f4,
    color: colors.black,
    fontWeight: '400',
    textAlign: 'left',
  },
  email: {
    fontWeight: '700',
    fontSize: fontSizes.f4,
    color: colors.black,
  },
  logoutBtn: {
    borderWidth: 1.5,
    width: 302,
    position: 'absolute',
    bottom: spacings.s5,
    padding: spacings.s1,
    borderRadius: borderRadius.r2,
    alignItems: 'center',
  },
});
