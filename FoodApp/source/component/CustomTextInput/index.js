import React, {useRef, useState, useEffect} from 'react';
import {TextInput, Text, View, TouchableOpacity} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';
import {PasswordHideSymbol, PasswordShowSymbol} from '../../utils/svg';
import Styles from './style';

const CustomTextInput = ({
  value,
  label = null,
  type = 'text',
  onChangeText,
  placeholder,
  secureTextEntry = false,
  containerStyle = {},
  labelStyle = {},
  editable = true,
  style = {},
  keyboardType = 'default',
  returnKeyType = 'done',
  onSubmit = () => {},
  onFocus = () => {},
  rightIcon = null,
  leftIcon = null,
  errorText = '',
  multiline = false,
  numberOfLines = 1,
  isRequired = null,
  props,
}) => {
  const focus = () => {
    textInputRef.current.focus();
  };
  const textInputRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    // dispatch(getGroupDetails(navigation));
    if (type == 'password') {
      setIsHidden(true);
    }
  }, []);
  return (
    <View
    // style={{flex: 1}}
    >
      {label == null ? null : (
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={[
              {
                color: Colors.black,
                fontFamily: Fonts.Regular_font,
                fontSize: 16,
              },
              labelStyle,
            ]}>
            {label}
          </Text>
          {isRequired == null ? null : (
            <Text
              style={[
                {
                  color: Colors.red,
                  fontFamily: Fonts.Regular_font,
                  fontSize: 16,
                },
              ]}>
              *
            </Text>
          )}
        </View>
      )}
      <View style={[Styles.View_Main, containerStyle]}>
        {leftIcon == null ? null : (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {leftIcon()}
          </View>
        )}
        <TextInput
          ref={textInputRef}
          value={value}
          placeholder={placeholder}
          onChangeText={text => {
            onChangeText(text);
          }}
          editable={editable}
          keyboardType={keyboardType}
          secureTextEntry={isHidden}
          style={[
            {
              color: Colors.black,
              fontFamily: Fonts.Regular_font,
              fontSize: 16,
              flex: 1,
            },
            style,
          ]}
          numberOfLines={numberOfLines}
          multiline={multiline}
          returnKeyType={returnKeyType}
          onBlur={() => onSubmit()}
          onSubmitEditing={() => onSubmit()}
          onFocus={() => onFocus()}
          {...props}
        />
        {rightIcon == null ? null : (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {rightIcon()}
          </View>
        )}
        {type == 'password' ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setIsHidden(!isHidden)}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {isHidden ? (
              <PasswordShowSymbol style={Styles.PasswordShowSymbol} />
            ) : (
              <PasswordHideSymbol style={Styles.PasswordShowSymbol} />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
      {errorText == '' ? (
        <View
          style={{
            // height: 25,
            marginBottom: 10,
          }}
        />
      ) : (
        <View
          style={{
            backgroundColor: Colors.tomato_red,
            paddingHorizontal: 10,
            borderRadius: 5,
            marginBottom: 10,
          }}>
          <Text
            style={{
              color: Colors.white,
              fontSize: 14,
              fontFamily: Fonts.Regular_font,
            }}>
            {errorText}
          </Text>
        </View>
      )}
    </View>
  );
};
export default CustomTextInput;
