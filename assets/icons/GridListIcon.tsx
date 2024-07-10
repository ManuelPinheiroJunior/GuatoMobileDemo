import React from 'react';
import { SvgXml } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';
import IcontType from './IcontType';


const getSvgContent = (color: string) => `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.83334 5.83333C5.83334 5.3731 6.20644 5 6.66668 5H16.6667C17.1269 5 17.5 5.3731 17.5 5.83333C17.5 6.29357 17.1269 6.66667 16.6667 6.66667H6.66668C6.20644 6.66667 5.83334 6.29357 5.83334 5.83333Z" fill="${color}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.83334 10C5.83334 9.53977 6.20644 9.16667 6.66668 9.16667H16.6667C17.1269 9.16667 17.5 9.53977 17.5 10C17.5 10.4602 17.1269 10.8333 16.6667 10.8333H6.66668C6.20644 10.8333 5.83334 10.4602 5.83334 10Z" fill="${color}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.83334 14.1667C5.83334 13.7064 6.20644 13.3333 6.66668 13.3333H16.6667C17.1269 13.3333 17.5 13.7064 17.5 14.1667C17.5 14.6269 17.1269 15 16.6667 15H6.66668C6.20644 15 5.83334 14.6269 5.83334 14.1667Z" fill="${color}"/>
<path d="M4.16667 5.83333C4.16667 6.29357 3.79357 6.66667 3.33333 6.66667C2.8731 6.66667 2.5 6.29357 2.5 5.83333C2.5 5.3731 2.8731 5 3.33333 5C3.79357 5 4.16667 5.3731 4.16667 5.83333Z" fill="${color}"/>
<path d="M4.16667 10C4.16667 10.4602 3.79357 10.8333 3.33333 10.8333C2.8731 10.8333 2.5 10.4602 2.5 10C2.5 9.53977 2.8731 9.16667 3.33333 9.16667C3.79357 9.16667 4.16667 9.53977 4.16667 10Z" fill="${color}"/>
<path d="M4.16667 14.1667C4.16667 14.6269 3.79357 15 3.33333 15C2.8731 15 2.5 14.6269 2.5 14.1667C2.5 13.7064 2.8731 13.3333 3.33333 13.3333C3.79357 13.3333 4.16667 13.7064 4.16667 14.1667Z" fill="${color}"/>
</svg>
`;

const GridListIcon: React.FC<IcontType> = ({ color = '#6759FF', width = 20, height = 20 }) => {
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

export default GridListIcon;


