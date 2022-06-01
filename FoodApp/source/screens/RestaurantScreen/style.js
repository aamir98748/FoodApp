import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../utils/colors';

const screen_width = Dimensions.get('window').width;
export default StyleSheet.create({
  View_Main: {
    flex: 1,
    // backgroundColor: Colors.splash_background,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingHorizontal: 100
  },
  ///////////////////////////////////////////////////////
  text_view_header: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.grey,
  },
  view_header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view_dash: {
    height: 10,
    width: 1,
    backgroundColor: Colors.grey,
  },
});
