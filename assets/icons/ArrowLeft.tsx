import React from 'react';
import { SvgXml } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';
import IcontType from './IcontType';


const getSvgContent = (color: string) => `
<svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.67217 13.7929C9.0627 14.1834 9.0627 14.8166 8.67217 15.2071C8.28165 15.5976 7.64848 15.5976 7.25796 15.2071L1.46507 9.41421C0.684019 8.63317 0.684017 7.36684 1.46507 6.58579L7.25796 0.792894C7.64848 0.402369 8.28165 0.402369 8.67217 0.792894C9.0627 1.18342 9.0627 1.81658 8.67217 2.20711L3.87928 7H17.9651C18.5174 7 18.9651 7.44772 18.9651 8C18.9651 8.55229 18.5174 9 17.9651 9H3.87928L8.67217 13.7929Z" fill="${color}"/>
</svg>
`;

const ArrowLeft: React.FC<IcontType> = ({ color = '#0F1621', width = 18, height = 18 }) => {
  return (
    <View style={styles.container}>
      <SvgXml xml={getSvgContent(color)} width={width} height={height} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ArrowLeft;


