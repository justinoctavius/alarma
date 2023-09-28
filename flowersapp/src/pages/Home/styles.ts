import {StyleSheet} from 'react-native';
import {spacings} from '../../constants/themes/spacings';
import {colors} from '../../constants/themes/colors';
import {fontSizes} from '../../constants/themes/fontSizes';
import {borderRadius} from '../../constants/themes/borderRadius';

export const styles = StyleSheet.create({
  addAlarmIconContainer: {
    position: 'absolute',
    bottom: spacings.s4,
    padding: spacings.s1,
    borderRadius: 100,
    backgroundColor: colors.white,
    right: spacings.s4,
  },
  logoutBtn: {
    borderWidth: 1.5,
    width: 302,
    padding: spacings.s1,
    borderRadius: borderRadius.r2,
    alignItems: 'center',
    marginBottom: spacings.s4,
  },
  logoutBtnContainer: {
    alignItems: 'center',
  },
});

export const counterStyles = StyleSheet.create({
  container: {
    width: 50,
    gap: 16,
    alignItems: 'center',
  },
  counterBtn: {
    backgroundColor: colors.tertiary,
    padding: 4,
    alignItems: 'center',
    width: 60,
  },
  counter: {
    borderWidth: 1,
    padding: 8,
    width: 77,
    borderRadius: 5,
  },
  counterText: {
    fontSize: 30,
    lineHeight: 34,
    color: colors.black,
    textAlign: 'center',
  },
});

export const addAlarmStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacings.s4,
  },
  form: {
    borderWidth: 1,
    flex: 1,
    borderRadius: 12,
    justifyContent: 'space-between',
  },
  header: {
    padding: 4,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: fontSizes.f4,
    color: colors.black,
  },
  textInputContainer: {
    padding: spacings.s4,
    gap: 16,
  },
  textInput: {
    borderWidth: 1,
    padding: 4,
    borderRadius: 5,
  },
  musicInputContainer: {
    borderWidth: 1,
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  musicInput: {
    padding: 0,
    flex: 1,
  },
  counterContainer: {
    top: 28,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
