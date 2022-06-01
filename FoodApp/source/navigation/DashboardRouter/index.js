/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  KeyboardAvoidingView,
  BackHandler,
  YellowBox,
  LogBox,
  TouchableOpacity,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NAVIGATION} from '../../constant';
import {Fonts} from '../../utils/fonts';
import {Colors} from '../../utils/colors';
import {
  TabCatalogsSymbol,
  TabCustomersSymbol,
  TabMoreSymbol,
  TabOrdersSymbol,
} from '../../utils/svg';

const Drawer = createDrawerNavigator();

///////////////////////////////////////////////////////////////

import {useSelector, useDispatch} from 'react-redux';
import {CustomLoader} from '../../component';
import Splash from '../../screens/AuthScreens/Splash';
import HomeScreen from '../../screens/AuthScreens/HomeScreen';
export default DashboardRouter = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(false);


  return (
    <>
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerType: 'front'}}
      // drawerContent={props => <CustomDrawer {...props} />}
      >
      <Drawer.Screen
        name={NAVIGATION.HOME}
        component={HomeScreen}
      />
      </Drawer.Navigator>
    </>
  );
};

const Styles = StyleSheet.create({
  View_main: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: Colors.white,
    // height: 20,
    // paddingHorizontal: 15,
    // borderRadius: 16,
    // paddingVertical: 2,
    // marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TabHomeSymbol: {
    height: 25,
    width: 25,
  },
  tab_text: {
    // fontFamily: Fonts.Regular_font,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    marginTop: 5,
  },
});
