/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
// import 'react-native-gesture-handler';
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
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
///////////////////////////////////////////////////////////////

// import DashboardRouter from './navigation/DashboardRouter';
import {NAVIGATION} from './constant';
import Splash from './screens/Splash';
import ProductScreen from './screens/ProductScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import ChoiceScreen from './screens/ChoiceScreen';
const Stack = createNativeStackNavigator();
// import { getLanguages } from 'react-native-i18n';
export default function App() {
  useEffect(() => {
    // checkLocalAuth();

    YellowBox.ignoreWarnings([
      'Animated: `useNativeDriver`',
      'source.uri should not be an empty string',
      'YellowBox has been replaced with LogBox. Please call LogBox.ignoreLogs() instead.',
    ]);
    LogBox.ignoreAllLogs(true);
    console.ignoredYellowBox = [
      'Warning: You are manually calling a React.PropTypes validation',
    ];
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name={NAVIGATION.SPLASH} component={Splash} />
              <Stack.Screen name={NAVIGATION.PRODUCT} component={ProductScreen} />
              <Stack.Screen name={NAVIGATION.RESTAURANT} component={RestaurantScreen} />
              <Stack.Screen name={NAVIGATION.CHOICE} component={ChoiceScreen} />
              {/* <Stack.Screen
                name={NAVIGATION.DASHBOARD_ROUTER}
                component={DashboardRouter}
              /> */}
            </Stack.Navigator>
          </NavigationContainer>
    </>
  );
}
