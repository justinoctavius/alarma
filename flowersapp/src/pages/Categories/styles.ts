import {StyleSheet} from 'react-native';
import {spacings} from '../../constants/themes/spacings';
import {colors} from '../../constants/themes/colors';
import {borderRadius} from '../../constants/themes/borderRadius';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    padding: spacings.s5,
    gap: spacings.s5,
    borderTopWidth: 1,
  },
  categoryText: {
    alignItems: 'center',
    padding: spacings.s3,
    flexDirection: 'row',
    width: 308,
    borderRadius: 100,
    color: colors.black,
    fontWeight: '400',
  },
  categoryTextContainer: {
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderRadius: spacings.s2,
    color: colors.black,
  },
  logoutBtn: {
    borderWidth: 1.5,
    width: 188,
    position: 'absolute',
    bottom: spacings.s5,
    padding: spacings.s1,
    borderRadius: borderRadius.r2,
    alignItems: 'center',
    right: spacings.s5,
  },
});
