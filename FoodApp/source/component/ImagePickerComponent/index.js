import React, {useEffect, useLayoutEffect, useState, useContext} from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
  Modal,
} from 'react-native';
import Styles from './style';
import {Colors} from '../../utils/colors';
import {CrownModalSymbol, CrownSymbol} from '../../utils/svg';
import ImagePicker from 'react-native-image-crop-picker';
import {Fonts} from '../../utils/fonts';
import I18n from '../../lang/i18n';
const ImagePickerComponent = ({
  navigation,
  route,
  isVisible,
  onClose,
  onSelect,
}) => {
  const openCamera = () => {
    ImagePicker.openCamera({
      // width: 300,
      // height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      // console.log(image.path);
      onClose();
      onSelect(image.data);
    });
  };
  const openGalary = () => {
    ImagePicker.openPicker({
      // width: 300,
      // height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      // console.log(image.data);
      onClose();
      onSelect(image.data);
    });
  };
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          onClose();
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            onClose();
          }}
          style={Styles.view_main_modal}>
          <TouchableOpacity
            activeOpacity={1}
            style={Styles.modal_white_back}
            onPress={() => openGalary()}>
            <Text style={Styles.text_option}>
              {I18n.t('filePicker.gallery')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={Styles.modal_white_back}
            onPress={() => openCamera()}>
            <Text style={Styles.text_option}>
              {I18n.t('filePicker.camera')}
            </Text>
          </TouchableOpacity>
          <View style={{height: 5, backgroundColor: Colors.border_color}} />
          <TouchableOpacity
            activeOpacity={1}
            style={Styles.modal_white_back}
            onPress={() => onClose()}>
            <Text style={Styles.text_option}>{I18n.t('button.cancel')}</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
export default ImagePickerComponent;
