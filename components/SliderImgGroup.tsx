import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

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
    <View style={styles.container}>
      {images.map((imgProps, index) => (
        <SliderImg key={index} {...imgProps} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start', // Itens alinhados à esquerda
    alignItems: 'flex-start', // Itens alinhados à esquerda verticalmente
    padding: 10,
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
