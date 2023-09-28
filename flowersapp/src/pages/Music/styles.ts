import {StyleSheet} from 'react-native';
import {spacings} from '../../constants/themes/spacings';
import {colors} from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: spacings.s4,
    gap: spacings.s4,
  },
  musicContainer: {
    alignItems: 'center',
    padding: spacings.s4,
    backgroundColor: colors.dark,
    flexDirection: 'row',
    width: 308,
    borderRadius: 100,
  },
  musicIcon: {
    position: 'absolute',
    left: spacings.s4,
  },
  musicText: {
    alignItems: 'center',
    color: colors.white,
    textAlign: 'center',
    width: '100%',
  },
});
