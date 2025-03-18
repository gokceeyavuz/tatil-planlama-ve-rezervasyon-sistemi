import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import style from './style';
import {Images} from '../../assets';
import icons from '../../assets/icons';
import {RoutesName} from '../../config';

const index = ({navigation}) => {
  return (
    <View style={style.background1}>
      <View>
        <ImageBackground
          source={Images.fontanaRoma}
          borderRadius={22}
          style={style.fontanaRomaImages}>
          <View style={style.iconBar}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate=(RoutesName.TRAVEL2);
              }}
              style={style.iconsGroup}>
              <Image
                source={icons.back}
                tintColor={'white'}
                style={style.imagesBack}></Image>
            </TouchableOpacity>
            <View style={style.iconsGroup}>
              <Image
                source={icons.save}
                tintColor={'white'}
                style={style.imagesBack}></Image>
            </View>
          </View>
          <View style={style.explainAlani}>
            <View style={style.explainTextGroup}>
              <Text style={style.textGroup}>Fontana Di Trevi</Text>
              <Text style={style.text2Group}>Price</Text>
            </View>
            <View style={style.group2}>
              <Image source={icons.pin} style={style.pinIcon}></Image>
              <Text style={style.text1Group2}>Roma,İtalya</Text>
              <Text style={style.textPrice}>230</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={style.textBar2}>
        <Text style={style.textPopular}>Overview</Text>
        <Text style={style.textView}>Details</Text>
      </View>
      <View style={style.buttonBar}>
        <View style={style.buttonGroup}>
          <View style={style.button1}>
            <Image style={style.menüBarIcons} source={icons.clock}></Image>
          </View>
          <View>
            <Text style={style.textButton1}>8 hours</Text>
          </View>
        </View>
        <View style={style.buttonGroup}>
          <View style={style.button1}>
            <Image style={style.menüBarIcons} source={icons.cloud}></Image>
          </View>
          <View>
            <Text style={style.textButton2}>23'C</Text>
          </View>
        </View>
        <View style={style.buttonGroup}>
          <View style={style.button1}>
            <Image style={style.menüBarIcons} source={icons.star}></Image>
          </View>
          <View>
            <Text style={style.textButton2}>7.8</Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View>
          <Text style={style.scrollText}>
            Trevi Çeşmesi (İtalyanca: Fontana di Trevi, Türkçesi Üçyol Çeşmesi;
            Aşk Çeşmesi olarak da bilinir), İtalya'nın başkenti Roma'nın Trevi
            semtinde, İtalyan mimar Nicola Salvi tarafından tasarlanan, Giuseppe
            Pannini ve diğer mimarlar tarafından tamamlanan bir çeşmedir. 26.3
            metre yüksekliğe ve 49.15 metre genişliğe sahip olan yapı, Roma'nın
            en büyük Barok çeşmesidir. Çeşme, Roma Tatili (1953), Aşk Çeşmesi
            (1954), Federico Fellini'nin klasik Tatlı Hayat'ı (1960) ve Lizzie
            McGuire (2003) dahil olmak üzere birçok filmde yer aldı.Çeşmenin adı
            Latince "Trivium" (üç sokağın kesiştiği yer) kelimesinden
            gelmektedir. Çeşme, De 'Crocicchi Caddesi, Poli Caddesi ve Delle
            Muratte Caddesi'nin tam merkezinde yer almaktadır.Fontana di
            Trevi’nin yapımına 1732 yılında başlandı. Görev, Papa XII.
            Clement’in isteğiyle dönemin ünlü heykeltıraş ve mimarı Nicola
            Salvi’ye verildi. Traverten ve mermerlerden oluşan yapının inşası
            tam 30 yıl sürdü ve yapımında birçok ünlü mimar rol oynadı. Aşk
            Çeşmesi’nin hikâyesi şöyle bir rivayete dayanır: Savaştan yorgun
            düşen kral ve askerleri susuzluktan ölmek üzerelerdir. Tam bu sırada
            karşılarına bir çeşme çıkar ve hayatları kurtulur. İşte o çeşme,
            klasik ve barok ahenginin en mükemmel eserlerinden biri olan Fontana
            di Trevi’dir.Çeşmenin olduğu meydana çıkan üç yol vardır ve Trevi
            İtalyanca’da üç yol anlamına gelir. Ayrıca yapı, bünyesinde birçok
            heykel, kabartma ve betimlemeler barındırır. Hepsi farklı bir figürü
            temsil eder. Çeşmenin ortasında yer alan heykel Posedion’u,
            yanlarındaki heykeller ise bereket ve sağlık tanrıçasını temsil
            eder. Yine merkez bölümünde iki Triton arasında Tanrı Neptün heykeli
            yer alır. Roma Mitolojisi’ne göre Neptün, su ve denizlerin
            tanrısıdır. İki yanında biri uysal, diğeri agresif iki at ve onları
            tutan Tritonlar yer alır. Eserin tepe kısmında 4 adet daha heykel
            vardır. Bu heykeller bereket ve doğa ananın cömertliğini sembolize
            eder.
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={style.buttonSon}>
        <View style={style.buttonGroup}>
          <View>
            <Text style={style.buttonText1}>Book Now</Text>
          </View>
          <View>
            <Image source={icons.go} style={style.buttonicons}></Image>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
