import React, {useRef, useState, useEffect} from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';
import {
  BackSymbol,
  DoneSymbol,
  PasswordHideSymbol,
  PasswordShowSymbol,
} from '../../utils/svg';
import Styles from './style';

const CustomHeader = ({
  headerText = '',
  headerTextStyle = {},
  style = {},
  onSubmit = () => {},
  isBack = false,
  navigation,
  rightIcon = null,
  rightIcon1 = null,
  leftIcon = null,
  centerAlign = false,
  props,
}) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          paddingVertical: 15,
          paddingHorizontal: 20,
          height: 70,
          alignItems: 'center',
          borderBottomWidth: 0.5,
          borderColor: Colors.border_color,
          backgroundColor: Colors.white,
        },
        style,
      ]}>
      {leftIcon == null ? null : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {leftIcon()}
        </View>
      )}
      {isBack ? (
        <>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
            }}>
            <TouchableOpacity
              // style={[Styles.View_Main, style]}
              activeOpacity={0.8}
              onPress={() => {
                navigation.goBack();
              }}>
              <BackSymbol />
            </TouchableOpacity>
            {/* <Text onPress={() => navigation.goBack()} style={Styles.backText}>
              Back
            </Text> */}
          </View>
        </>
      ) : null}
      <Text
        style={[
          Styles.headerText,
          centerAlign ? {textAlign: 'center', fontSize: 18} : {},
          headerTextStyle,
        ]}>
        {headerText}
      </Text>

      {rightIcon1 == null ? null : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {rightIcon1()}
        </View>
      )}
      {rightIcon == null ? (
        <View style={{width: 50}} />
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {rightIcon()}
        </View>
      )}
    </View>
  );
};
export default CustomHeader;
