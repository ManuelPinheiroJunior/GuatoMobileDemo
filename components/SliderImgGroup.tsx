import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

type SliderImgProps = {
  imageSource: any;
  text: string;
  imageStyle?: object;
  textStyle?: object;
};

type SliderImgGroupProps = {
  images: SliderImgProps[];
};

const SliderImg: React.FC<SliderImgProps> = ({ imageSource, text, imageStyle, textStyle }) => {
  return (
    <View style={styles.sliderImgContainer}>
      <Image source={imageSource} style={[styles.image, imageStyle]} />
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
};

const SliderImgGroup: React.FC<SliderImgGroupProps> = ({ images }) => {
  return (
    <View style={styles.outerContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
        {images.map((imgProps, index) => (
          <SliderImg key={index} {...imgProps} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    overflow: 'hidden',
  },
  scrollViewContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingStart: 0, 
    paddingEnd: 60, 
  },
  sliderImgContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    color: '#252843',
    fontWeight: '600',
  },
});

export default SliderImgGroup;
