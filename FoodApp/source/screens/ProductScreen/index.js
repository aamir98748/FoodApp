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
import {
  BackArrowSymbol,
  BikeSymbol,
  BookmarkSymbol,
  CuisineSymbol,
  DownSymbol,
  FilterSymbol,
  LocationPinSymbol,
  OfferSymbol,
  RightSymbol,
  SearchSymbol,
  StarSymbol,
  WatchSymbol,
} from '../../utils/svg';
import style from './style';
import images from '../../utils/images';
// const screen_width = Dimensions.get('window').width;
// const screen_height = Dimensions.get('window').height;
const ProductScreen = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [optionsList, setOptionsList] = useState([{}, {}, {}]);

  const renderList = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate(NAVIGATION.RESTAURANT);
        }}
        style={{
          marginLeft: 10,
          marginBottom: 20,
        }}>
        <Text style={style.flatlist_head_text}>Al Ward Al shami</Text>
        <Text style={style.flatlist_detail_text}>
          Lusail - Offering the most delivcious syrian...
        </Text>
        <ImageBackground
          source={images.dish_img}
          style={{padding: 10, paddingBottom: 0, flexDirection: 'row'}}
          resizeMode="stretch">
          <View style={{flex: 1}}>
            <View
              style={{
                backgroundColor: Colors.white,
                borderRadius: 15,
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 30,
              }}>
              <BookmarkSymbol fill={Colors.green} />
            </View>
            <View
              style={{
                backgroundColor: Colors.app_orange,
                borderRadius: 5,
                padding: 10,
                alignSelf: 'flex-start',
              }}>
              <Text style={{color: Colors.white}}>Delivery by vendor</Text>
            </View>
            <View
              style={{
                backgroundColor: Colors.dark_green,
                borderRadius: 5,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                alignSelf: 'flex-start',
                marginTop: 5,
              }}>
              <StarSymbol />
              <Text style={{color: Colors.white}}>3.7</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={{color: Colors.white}}>60-80 Min</Text>
              <WatchSymbol style={{marginTop: 15}} />
              <Text style={{color: Colors.white}}>2.3 miles</Text>
              <BikeSymbol style={{marginTop: 15}} />
            </View>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <Image source={images.qatar_img} style={style.qatar_img} />
            <Image source={images.aroma_img} style={style.qatar_img} />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  const renderList1 = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate(NAVIGATION.RESTAURANT);
        }}
        style={{
          marginLeft: 10,
        }}>
        <Text style={style.flatlist_head_text}>Steak House</Text>
        <Text style={style.flatlist_detail_text}>
          Lagoona - Beef, chicken, sand...
        </Text>
        <ImageBackground
          source={images.dish_img}
          style={{padding: 10, paddingBottom: 0, flexDirection: 'row'}}
          resizeMode="stretch">
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: Colors.white,
                  borderRadius: 15,
                  height: 30,
                  width: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 50,
                }}>
                <BookmarkSymbol fill={Colors.green} />
              </View>
              <View style={{flex: 1}} />
              <Image source={images.qatar_img} style={style.qatar_img} />
            </View>
            <View
              style={{
                backgroundColor: Colors.dark_green,
                borderRadius: 5,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                alignSelf: 'flex-start',
                marginTop: 5,
              }}>
              <StarSymbol />
              <Text style={{color: Colors.white}}>3.7</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={{color: Colors.white}}>60-80 Min</Text>
              <WatchSymbol style={{marginTop: 15}} fill={Colors.white} />
              <Text style={{color: Colors.white}}>2.3 miles</Text>
              <BikeSymbol style={{marginTop: 15}} />
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
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
          <View
            style={{
              backgroundColor: Colors.light_pink,
              padding: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <BackArrowSymbol />
              <LocationPinSymbol style={{marginHorizontal: 10}} />
              <Text style={{color: Colors.white}}>Al Hilal East, Doha</Text>
              <DownSymbol style={{marginLeft: 10}} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 10,
                  borderRadius: 10,
                  marginRight: 10,
                }}>
                <Text style={{color: Colors.purple}}>All</Text>
              </View>
              <View
                style={{
                  backgroundColor: Colors.green,
                  padding: 10,
                  borderRadius: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <OfferSymbol />
                <Text style={{color: Colors.white}}>Offers</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={style.view_filter}>
              <FilterSymbol />
              <Text style={style.text_filter}>Filters</Text>
            </View>
            <View style={style.view_filter}>
              <CuisineSymbol />
              <Text style={style.text_filter}>Cuisines</Text>
            </View>
            <View style={style.view_filter}>
              <SearchSymbol fill={Colors.green} />
              <Text style={style.text_filter}>Search</Text>
            </View>
          </View>
          <View style={style.view_filter_head}>
            <Text style={style.text_title}>Newly Added</Text>
            <Text style={style.text_detail}>Show all</Text>
            <RightSymbol fill={Colors.pink} />
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={optionsList}
            renderItem={renderList}
            horizontal
          />
          <View style={style.view_filter_head}>
            <Text style={style.text_title}>Nearby</Text>
            <Text style={style.text_detail}>Show all</Text>
            <RightSymbol fill={Colors.pink} />
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={optionsList}
            renderItem={renderList}
            horizontal
          />
          <View style={style.view_filter_head}>
            <Text style={style.text_title}>Recommended for you</Text>
            <Text style={style.text_detail}>Show all</Text>
            <RightSymbol fill={Colors.pink} />
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={optionsList}
            renderItem={renderList1}
            horizontal
          />
          <View style={style.view_filter_head}>
            <Text style={style.text_title}>All Restaurants</Text>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={optionsList}
            renderItem={renderList}
          />
        </ScrollView>
      </View>
    </>
  );
};
export default ProductScreen;
