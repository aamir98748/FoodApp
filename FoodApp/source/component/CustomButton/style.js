import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';

const screen_width = Dimensions.get('window').width;
export default StyleSheet.create({
  View_Main: {
    backgroundColor: Colors.app_orange,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 15,
    // paddingHorizontal: 100
  },
  buttonText: {
    fontSize: 14,
    color: Colors.white,
    fontFamily: Fonts.Regular_font,
  },
  disabled: {
    backgroundColor: Colors.white_trans,
    flex: 1,
    height: '75%',
    width: '100%',
    position: 'absolute',
    marginTop: 15,
    marginBottom: -15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
