import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Alert from '../assets/icons/Alert'; 
import EllipticalButton from './EllipticalButton';

type SliderProps = {
  title: string;
  subTitle: string;
  description: string;
};

const Slider: React.FC<SliderProps> = ({ title, subTitle, description }) => {
  const handlePress = () => {
    console.log('Offer grabbed!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <View style={styles.row}>
          <Text style={styles.titleText}>{title}</Text>
          <Alert width={16} />
        </View>
        <Text style={styles.subTitleText}>{subTitle}</Text>
        <EllipticalButton title={description} onPress={handlePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#33383F',
    marginRight: 5,
  },
  subTitleText: {
    fontSize: 45,
    fontWeight: '700',
    color: '#1A1D1F',
    marginRight: 5,
    marginBottom:10,
  },
});

export default Slider;
