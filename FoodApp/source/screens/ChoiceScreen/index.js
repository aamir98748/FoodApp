import React, {useEffect, useState, useRef} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  FlatList,
  Image,
} from 'react-native';
import {Colors} from '../../utils/colors';
import {NAVIGATION, EMAIL_PATTERN, VARIABLE} from '../../constant';
import {console_log} from '../../utils/loggers';
import images from '../../utils/images';
import {
  BackArrowSymbol,
  BikeSymbol,
  BookmarkSymbol,
  CorrectSymbol,
  CuisineSymbol,
  DeleteSymbol,
  DownSymbol,
  FilterSymbol,
  InfoSymbol,
  LocationPinSymbol,
  MessageSymbol,
  OfferSymbol,
  PlusSymbol,
  RightSymbol,
  RunningStarSymbol,
  SearchSymbol,
  ShareSymbol,
  StarSymbol,
  WatchSymbol,
} from '../../utils/svg';
import style from './style';
// const screen_width = Dimensions.get('window').width;
// const screen_height = Dimensions.get('window').height;
const ChoiceScreen = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(false);

  const [optionsList, setOptionsList] = useState([{}, {}, {}, {}, {}]);

  const renderList = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: Colors.parrot,
          marginRight: 15,
          height: 85,
          width: 120,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 16, fontWeight: '500', color: Colors.white}}>
          QR 2
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            color: Colors.white,
            marginTop: 10,
          }}>
          Extra Cheese
        </Text>
        <CorrectSymbol style={{position: 'absolute', top: 10, left: 10}} />
      </View>
    );
  };
  return (
    <>
      <View
        style={{
          backgroundColor: Colors.white,
          flex: 1,
          // height: screen_height,
          // width: screen_width,
        }}>
        <ScrollView
          // style={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          bounces={false}
          // contentContainerStyle={{flex: 1, paddingBottom: 60}}
        >
          <ImageBackground
            source={images.choice_head}
            style={{padding: 10, height: 250}}
            resizeMode="cover">
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  navigation.goBack();
                }}>
                <BackArrowSymbol />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: Colors.white,
                  flex: 1,
                  textAlign: 'center',
                }}>
                Aroma Restaurant
              </Text>
              <BookmarkSymbol fill={Colors.white} style={{marginRight: 10}} />
              <ShareSymbol fill={Colors.white} />
            </View>
          </ImageBackground>
          <View style={{padding: 10}}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: Colors.dark_green,
              }}>
              QR 23
            </Text>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', color: Colors.black}}>
              Sagittis egestas
            </Text>
            <Text style={{fontSize: 15, color: Colors.dark_green}}>
              Non porta vestibulum feugiat ac pretium neque vestibulum feugiat
              ac pretium. Non porta vestium feugiat acendo...
              <Text style={{color: Colors.purple}}>See more</Text>
            </Text>
            <View
              style={{
                borderColor: Colors.dull_orange,
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: Colors.light_brown,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 15,
              }}>
              <InfoSymbol fill={Colors.dull_orange} />
              <Text style={{fontSize: 14, color: Colors.dull_orange}}>
                Fermentum est massa dolor vulputate pellentesque velit facilisis
                pulvinar.
              </Text>
            </View>
          </View>
          <View style={style.view_partition}>
            <Text style={style.text_partition_header}>
              Choice of (1 minimum)
            </Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={optionsList}
              renderItem={renderList}
              horizontal
            />
          </View>
          <View style={style.view_partition}>
            <Text style={style.text_partition_header}>
              Choice of family fries substitute
            </Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={optionsList}
              renderItem={renderList}
              horizontal
            />
          </View>
          <View style={style.view_partition}>
            <Text style={style.text_partition_header}>
              Choice of coleslow substitute
            </Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={optionsList}
              renderItem={renderList}
              horizontal
            />
          </View>
          <View style={style.view_partition}>
            <Text style={style.text_partition_header}>Add ons</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={optionsList}
              renderItem={renderList}
              horizontal
            />
          </View>
          <View style={style.view_partition}>
            <Text style={style.text_partition_header}>Add Comments</Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 20,
              }}>
              <MessageSymbol />
              <Text style={{fontSize: 15, color: Colors.grey, marginLeft: 10}}>
                Quam egestas et, consectetur aliquam
              </Text>
            </View>

            <View
              style={{
                borderColor: Colors.purple,
                borderWidth: 1,
                borderRadius: 5,
                padding: 20,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                marginBottom:10
              }}>
              <DeleteSymbol fill={Colors.app_orange} />
              <Text style={{fontSize: 20, color: Colors.purple,flex:1,textAlign: 'center'}}>
                1
              </Text>
              <Text style={{fontSize: 20, color: Colors.purple}}>
                +
              </Text>
            </View>
            <View
              style={{
                backgroundColor: Colors.purple,
                borderRadius: 5,
                padding: 15,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom:20
              }}>
              <Text style={{fontSize: 20, color: Colors.white}}>
              Add to basket (QR 25)
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default ChoiceScreen;
