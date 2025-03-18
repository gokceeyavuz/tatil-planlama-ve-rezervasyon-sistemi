import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import style from './style';
import {Icons, Images} from '../../assets';
import icons from '../../assets/icons';

const index = () => {
  return (
    <SafeAreaView style={style.backgrounnnf}>
      <View style={style.iconsBar}>
        <View style={style.textBar}>
          <Text style={style.textHi}>Hi,Gökçe</Text>
          <Image source={Icons.wave} style={style.textİcon}></Image>
        </View>
        <Image source={Icons.user} style={style.iconUsers}></Image>
      </View>
      <Text style={style.exploreText}>Explore The World</Text>
      <View style={style.searchAlani}>
        <TextInput style={style.searchBar}>
          <Text style={style.searchText}>Search Places</Text>
        </TextInput>
      </View>
      <View style={style.textBar2}>
        <Text style={style.textPopular}>Popular Places</Text>
        <Text style={style.textView}>View All</Text>
      </View>
      <View style={style.buttonBar}>
        <TouchableOpacity style={style.button1}>
          {' '}
          <Text style={style.button1Text}>Most Viewed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button2}>
          <Text style={style.button2Text}>Nearby</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button2}>
          {' '}
          <Text style={style.button2Text}>Latest</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        <View style={{flexDirection: 'row', gap: 12}}>
          <View>
            <ImageBackground
              source={Images.pisa}
              borderRadius={22}
              style={style.scroolImage}>
              <View style={style.scrollGroup} width={12} height={14}>
                <Image source={icons.heart} style={style.imagesHeart}></Image>
              </View>
              <View style={style.explainAlani}>
                <View style={style.group1}>
                  <Text style={style.textGroup1}>Pİsa,</Text>
                  <Text style={style.text2Group1}>İtalya</Text>
                </View>
                <View style={style.group2}>
                  <Image source={icons.pin} style={style.pinIcon}></Image>
                  <Text style={style.text1Group2}>Toscana,İtalya</Text>
                  <Image source={icons.star} style={style.starIcons}></Image>
                  <Text style={style.textStarIcon}>7.8</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <ImageBackground
            source={Images.roma}
            borderRadius={22}
            style={style.scroolImage}>
            <View style={style.scrollGroup} width={12} height={14}>
              <Image source={icons.heart} style={style.imagesHeart}></Image>
            </View>
            <View style={style.explainAlani}>
              <View style={style.group1}>
                <Text style={style.textGroup1}>Panteheon,</Text>
                <Text style={style.text2Group1}>İtalya</Text>
              </View>
              <View style={style.group2}>
                <Image source={icons.pin} style={style.pinIcon}></Image>
                <Text style={style.text1Group2}>Roma,İtalya</Text>
                <Image source={icons.star} style={style.starIcons}></Image>
                <Text style={style.textStarIcon}>8.8</Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground
            source={Images.milano}
            borderRadius={22}
            style={style.scroolImage}>
            <View style={style.scrollGroup} width={12} height={14}>
              <Image source={icons.heart} style={style.imagesHeart}></Image>
            </View>
            <View style={style.explainAlani}>
              <View style={style.group1}>
                <Text style={style.textGroup1}>Doumo di Milano,</Text>
                <Text style={style.text2Group1}>İtalya</Text>
              </View>
              <View style={style.group2}>
                <Image source={icons.pin} style={style.pinIcon}></Image>
                <Text style={style.text1Group2}>Milano,İtalya</Text>
                <Image source={icons.star} style={style.starIcons}></Image>
                <Text style={style.textStarIcon}>9.8</Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground
            source={Images.portofino}
            borderRadius={22}
            style={style.scroolImage}>
            <View style={style.scrollGroup} width={12} height={14}>
              <Image source={icons.heart} style={style.imagesHeart}></Image>
            </View>
            <View style={style.explainAlani}>
              <View style={style.group1}>
                <Text style={style.textGroup1}>Portfofino,</Text>
                <Text style={style.text2Group1}>İtalya</Text>
              </View>
              <View style={style.group2}>
                <Image source={icons.pin} style={style.pinIcon}></Image>
                <Text style={style.text1Group2}>Cenova,İtalya</Text>
                <Image source={icons.star} style={style.starIcons}></Image>
                <Text style={style.textStarIcon}>4.8</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
     
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
