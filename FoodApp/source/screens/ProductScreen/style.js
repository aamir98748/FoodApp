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
  view_filter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
    borderRightWidth: 1,
    borderColor: Colors.border_color,
    backgroundColor: Colors.white,
    // shadowColor: Colors.black,
    // shadowOffset: {width: 2, height: 2},
    // shadowOpacity: 0.3,
    // shadowRadius: 5,
    // elevation: 3,
    marginBottom: 15,
  },
  text_title: {
    color: Colors.black,
    fontWeight: 'bold',
    flex: 1,
    fontSize: 18,
  },
  view_filter_head: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 5,
    borderColor: Colors.dull_white,
    paddingHorizontal: 10,
    paddingVertical:15
  },
  text_detail: {
    color: Colors.pink,
    fontWeight: 'bold',
  },
  text_filter: {
    color: Colors.dark_green,
    marginLeft: 5,
  },
  qatar_img: {},
  flatlist_head_text: {
    color: Colors.black,
    fontWeight: 'bold',
    flex: 1,
  },
  flatlist_detail_text: {
    color: Colors.grey
  }
});
