import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import style from './style';
import {Icons} from '../../assets';
import {RoutesName} from '../../config';

const index = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('seyahat');
    }, 2000);
  });
  return (
    <View style={style.backgrounddd}>
      <View style={style.travelBar}>
        <Text style={style.travelText}> Travel </Text>
        <Image source={Icons.earth} style={style.earthIcons}></Image>
      </View>
      <View>
        <Text style={style.textBar}>Find Your Dreams Destination With us </Text>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
