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
import {PasswordHideSymbol, PasswordShowSymbol} from '../../utils/svg';
import Styles from './style';

const CustomButton = ({
  buttonText,
  style = {},
  onSubmit = () => {},
  disabled = false,
  loading = false,
  props,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={[Styles.View_Main, style]}
        activeOpacity={0.8}
        onPress={() => onSubmit()}>
        <Text style={Styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
      {disabled || loading ? (
        <View style={[Styles.disabled]}>
          {loading ? <ActivityIndicator /> : null}
        </View>
      ) : null}
    </View>
  );
};
export default CustomButton;
