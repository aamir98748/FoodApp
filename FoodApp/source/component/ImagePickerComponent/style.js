import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';

const styles = StyleSheet.create({
  view_main_modal: {
    backgroundColor: Colors.black_opacity_40,
    flex: 1,
    // opacity: 0.5,
    // alignItems: 'center',
    // justifyContent: 'center',
    justifyContent: 'flex-end',
  },
  modal_white_back: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.border_color,
  },
  ///////////////////////////////////////
  text_option: {
    fontSize: 16,
    fontFamily: Fonts.Regular_font,
    color: Colors.app_orange,
  },
});
export default styles;
