import React from 'react';
import { SvgXml } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';
import IcontType from './IcontType';


const getSvgContent = (color: string) => `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.16666 1.66666C2.78594 1.66666 1.66666 2.78594 1.66666 4.16666V15.8333C1.66666 17.214 2.78594 18.3333 4.16666 18.3333H15.8333C17.214 18.3333 18.3333 17.214 18.3333 15.8333V4.16666C18.3333 2.78594 17.214 1.66666 15.8333 1.66666H4.16666ZM11.6667 3.33332H8.33332V6.66666H11.6667V3.33332ZM13.3333 3.33332V6.66666H16.6667V4.16666C16.6667 3.70642 16.2936 3.33332 15.8333 3.33332H13.3333ZM11.6667 8.33332H8.33332V11.6667H11.6667V8.33332ZM13.3333 11.6667V8.33332H16.6667V11.6667H13.3333ZM11.6667 13.3333H8.33332V16.6667H11.6667V13.3333ZM13.3333 16.6667V13.3333H16.6667V15.8333C16.6667 16.2936 16.2936 16.6667 15.8333 16.6667H13.3333ZM4.16666 3.33332H6.66666V6.66666H3.33332V4.16666C3.33332 3.70642 3.70642 3.33332 4.16666 3.33332ZM3.33332 8.33332H6.66666V11.6667H3.33332V8.33332ZM3.33332 13.3333H6.66666V16.6667H4.16666C3.70642 16.6667 3.33332 16.2936 3.33332 15.8333V13.3333Z" fill="${color}"/>
</svg>
`;

const GridIcon: React.FC<IcontType> = ({ color = '#9A9FA5', width = 20, height = 20 }) => {
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

export default GridIcon;


