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
  view_partition: {
    padding: 10, 
    paddingVertical: 15,
    borderColor: Colors.dull_white,
     borderTopWidth: 5
    },
    text_partition_header:{
      fontSize: 20,
      color: Colors.black,
      fontWeight: 'bold',
      marginBottom: 20,
    }
});
