import React from 'react';
import { ScreenContent } from 'components/ScreenContent';
import Container from 'components/Container';
import SearchBar from 'components/SearchBar';
import { StyleSheet, Text, View } from 'react-native';
import CarouselContainer from 'components/CarouselContainer';
import Slide from 'components/Slide';

export default function Home() {

  const onProgress = () => {
  };

  return (
    <ScreenContent path="screens/home.tsx" title="">
      <Container style={styles.container}>
        <Text style={styles.title}>HELLO ASHFAK</Text>
        <Text style={styles.body}>What you are looking for today</Text>
        <SearchBar placeholder="Search what you need..." iconPosition="right" onPress={onProgress} />
      </Container>
        <View style={{...styles.container, top: 20}}>
      <CarouselContainer>
      <View style={{...styles.containerInformation, backgroundColor: '#EAF6EF'}}>
        <Slide title='Offer AC Service' subTitle='Get 25%' description='Grab Offer' />
      </View>
      <View style={[styles.containerInformation,styles.slideTwo]}>
       <Slide title='Offer AC Service' subTitle='Get 50%' description='Grab Offer' />
      </View>
      <View style={[styles.containerInformation,styles.slideThree]}>
      <Slide title='Offer AC Service' subTitle='Get 75%' description='Grab Offer' />
      </View>
    </CarouselContainer>
      </View>
    </ScreenContent>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: 380,
    height: 220,
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
});
