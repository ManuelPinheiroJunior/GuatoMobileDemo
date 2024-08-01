import React, { useState } from 'react';
import { ScreenContent } from 'components/ScreenContent';
import Container from 'components/Container';
import SearchBar from 'components/SearchBar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CarouselContainer from 'components/CarouselContainer';
import Slider from 'components/Slider';
import CircleButton from 'components/CircleButton';
import HeaderArticle from 'components/HeaderArticle';
import AcRepair from 'assets/icons/AcRepair';
import Beauty from 'assets/icons/Beauty';
import Appliance from 'assets/icons/Appliance';
import ArrowRight from 'assets/icons/ArrowRight';
import EllipticalButton from 'components/EllipticalButton';
import SliderImgGroup from 'components/SliderImgGroup';
import { NavigationProp } from '@react-navigation/native';

const cleaningImage = require('assets/Cleaning.png'); 
const CarpetCleaning = require('assets/Carpet Cleaning.png'); 
const OfficeCleaning = require('assets/Office Cleaning.png'); 

type HomeProps = {
  navigation: NavigationProp<any>;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [userText, setUserText] = useState('');

  const onProgress = () => {
     navigation.navigate('Categories'); 
  };

  const images = [
    { imageSource: cleaningImage, text: 'Home Cleaning' },
    { imageSource: CarpetCleaning, text: 'Carpet Cleaning' },
    { imageSource: OfficeCleaning, text: '' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <ScreenContent path="home" title="">
        <Container style={styles.container}>
          <Text style={styles.title}>HELLO ASHFAK</Text>
          <Text style={styles.body}>What you are looking for today</Text>
          <SearchBar 
            placeholder="Search what you need..." 
            iconPosition="right" 
            onPressRight={onProgress} 
            onChangeText={setSearchText} 
            value={searchText}
            navigation={navigation}
          />
        </Container>
        <View style={{ ...styles.container, top: 15 }}>
          <CarouselContainer>
            <View style={{ ...styles.containerInformation, backgroundColor: '#EAF6EF' }}>
              <Slider title='Offer AC Service' subTitle='Get 25%' description='Grab Offer' />
            </View>
            <View style={[styles.containerInformation, styles.slideTwo]}>
              <Slider title='Offer AC Service' subTitle='Get 50%' description='Grab Offer' />
            </View>
            <View style={[styles.containerInformation, styles.slideThree]}>
              <Slider title='Offer AC Service' subTitle='Get 75%' description='Grab Offer' />
            </View>
          </CarouselContainer>
        </View>
        <Container style={{ ...styles.container, flexDirection: 'row', top: 30, height: 150, maxHeight: 120 }}>
          <CircleButton Icon={AcRepair} backgroundColor="#FFBC99" iconSize={28} iconColor="#2C2B46" onPress={onProgress} subTitle='AC Repair' />
          <CircleButton Icon={Beauty} backgroundColor="#CABDFF" iconSize={28} iconColor="#2C2B46" onPress={onProgress} subTitle='Beauty' />
          <CircleButton Icon={Appliance} backgroundColor="#B1E5FC" iconSize={28} iconColor="#2C2B46" onPress={onProgress} subTitle='Appliance' />
          <CircleButton Icon={ArrowRight} backgroundColor="#FAFAFA" borderColor='#ECECEC' borderWidth={1} iconSize={28} iconColor="#6F767E" onPress={onProgress} subTitle='See All' />
        </Container>
        <Container style={{ ...styles.container, top: 50, height: 'auto' }}>
          <HeaderArticle text='Cleaning Services' dividerColor='#CABDFF' ButtonComponent={<EllipticalButton title='See All' onPress={onProgress} style={styles.ellipticalButton} colorText='#6F767E' />} />
          <View style={styles.carouselContainer}>
            <SliderImgGroup images={images} />
          </View>
        </Container>
      </ScreenContent>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  container: {
    padding: 16,
    width: '100%', 
    height: 'auto', 
    gap: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  containerInformation: {
    width: 300,
    height: 190,
    borderRadius: 22,
    padding: 10,
    gap: 10,
    right: 65,
  },
  slideTwo: {
    marginLeft: -200,
    backgroundColor: '#E9F6FC',
  },
  slideThree: {
    marginLeft: -400,
    backgroundColor: '#FFD88D',
  },
  title: {
    width: 149,
    height: 26,
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 26,
    letterSpacing: 2,
    color: '#666C89',
  },
  body: {
    width: 312,
    height: 80,
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 35,
    lineHeight: 41,
    letterSpacing: -3,
    color: '#172B4D',
    bottom: 10,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ellipticalButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#EFEFEF',
    borderWidth: 1,
    height: 40,
    width: 100,
  },
  img: {
    marginVertical: 0,
    width: 140,
    height: 159,
  },
  carouselContainer: {
    alignItems: 'center',
  },
  sliderItem: {
    alignItems: 'flex-start',
    marginHorizontal: 5, 
  },
});

export default Home
