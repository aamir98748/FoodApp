import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';

const screen_width = Dimensions.get('window').width;
export default StyleSheet.create({
  View_Main: {
    // backgroundColor: Colors.app_orange,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 15,
    // paddingHorizontal: 100
  },
  backText: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: Fonts.Regular_font,
  },
  headerText: {
    fontSize: 30,
    color: Colors.black,
    fontFamily: Fonts.Regular_font,
    fontWeight: '400',
    flex: 1,
  },
});
