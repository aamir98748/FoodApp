import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import { NAVIGATION } from '../../constant';
import {Colors} from '../../utils/colors';
// import DeviceInfo from 'react-native-device-info';
const Splash = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(NAVIGATION.PRODUCT);
    }, 1000);
  }, []);
  return (
    <>
      <SafeAreaView style={{backgroundColor: Colors.app_orange}} />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: Colors.app_orange,
        }}>
        <Text style={{color: 'white', fontSize: 26}}>Food App</Text>
      </View>
    </>
  );
};
export default Splash;
