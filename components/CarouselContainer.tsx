import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

type CarouselContainerProps = {
  children: React.ReactNode[];
};

const CarouselContainer: React.FC<CarouselContainerProps> = ({ children }) => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {children.map((child, index) => (
        <View key={index} style={styles.container}>
          {child}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
  },
  container: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CarouselContainer;
