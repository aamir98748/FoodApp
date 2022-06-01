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
  CuisineSymbol,
  DownSymbol,
  FilterSymbol,
  InfoSymbol,
  LocationPinSymbol,
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
const RestaurantScreen = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [optionsList, setOptionsList] = useState([{}, {}, {}, {}, {}]);

  const renderList = ({item}) => {
    return (
      <View
        style={{
          padding: 10,
          backgroundColor: Colors.dull_white,
          margin: 15,
          marginRight: 0,
          borderRadius: 15,
          flexDirection: 'row',
          width: 300,
        }}>
        <Image
          source={images.sagitis_img}
          style={{height: 100, width: 100}}
          resizeMode="contain"
        />
        <View style={{flex: 1, marginLeft: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: Colors.black,
                flex: 1,
              }}>
              Sagittis egestas
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: Colors.black,
              }}>
              QR 23
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              color: Colors.dark_green,
            }}>
            Non porta vestibulum feugiat ac pretium neque
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate(NAVIGATION.CHOICE);
            }}
            style={{
              backgroundColor: Colors.purple,
              alignSelf: 'flex-end',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: Colors.white,
                fontWeight: 'bold',
              }}>
              + Add
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderList1 = ({item}) => {
    return (
      <View
        style={{
          padding: 10,
          backgroundColor: Colors.parrot,
          margin: 15,
          marginRight: 0,
          borderRadius: 15,
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: Colors.white}}>
          Veggie
        </Text>
      </View>
    );
  };
  const renderList2 = ({item}) => {
    return (
      <View
        style={{
          padding: 10,
          // backgroundColor: Colors.dull_white,
          marginHorizontal: 15,
          borderRadius: 15,
          flexDirection: 'row',
          borderBottomColor: Colors.dull_white,
          borderBottomWidth: 1,
        }}>
        <Image
          source={images.sagitis_img}
          style={{height: 100, width: 100}}
          resizeMode="contain"
        />
        <View style={{flex: 1, marginLeft: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: Colors.black,
                flex: 1,
              }}>
              Sagittis egestas
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: Colors.black,
              }}>
              QR 23
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              color: Colors.dark_green,
            }}>
            Non porta vestibulum feugiat ac pretium neque
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate(NAVIGATION.CHOICE);
            }}
            style={{
              backgroundColor: Colors.purple,
              alignSelf: 'flex-end',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: Colors.white,
                fontWeight: 'bold',
              }}>
              + Add
            </Text>
          </TouchableOpacity>
        </View>
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
            source={images.dish_img}
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
              <View style={{flex: 1}} />
              <SearchSymbol
                fill={Colors.white}
                //  style={{height:25,width:25}}
              />
              <BookmarkSymbol fill={Colors.white} style={{marginRight: 10}} />
              <ShareSymbol fill={Colors.white} />
            </View>
          </ImageBackground>
          <View style={{padding: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Aroma Restaurant
            </Text>
            <Text
              style={{fontSize: 15, fontWeight: 'bold', color: Colors.grey}}>
              Indian, Pakistani, Arabic
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 5,
              borderColor: Colors.dull_white,
              paddingVertical: 15,
            }}>
            <View style={style.view_header}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <RunningStarSymbol />
                <Text style={{fontSize: 15, color: Colors.dark_green}}>
                  3.7
                </Text>
              </View>
              <Text style={style.text_view_header}>Rating</Text>
            </View>
            <View style={style.view_dash} />
            <View style={style.view_header}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <WatchSymbol fill={Colors.dark_green} />
                <Text style={{fontSize: 15, color: Colors.dark_green}}>
                  3.7
                </Text>
              </View>
              <Text style={style.text_view_header}>Time</Text>
            </View>
            <View style={style.view_dash} />
            <View style={style.view_header}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: Colors.dark_green,
                  padding: 5,
                  borderRadius: 5,
                }}>
                <InfoSymbol fill={Colors.dark_green} />
                <Text style={{fontSize: 15, color: Colors.dark_green}}>
                  3.7
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              fontSize: 20,
              color: Colors.black,
              fontWeight: 'bold',
              marginLeft: 10,
              marginTop: 20,
            }}>
            Order Again?
          </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={optionsList}
            renderItem={renderList}
            horizontal
          />
          <View style={{backgroundColor: Colors.dull_white, height: 5}} />
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={optionsList}
            renderItem={renderList1}
            horizontal
          />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={optionsList}
            renderItem={renderList2}
          />
        </ScrollView>
      </View>
    </>
  );
};
export default RestaurantScreen;
