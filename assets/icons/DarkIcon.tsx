import React from 'react';
import { SvgXml } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';
import IcontType from './IcontType';


const getSvgContent = (color: string) => `
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.59839 2.89852C3.74589 4.15964 2.53271 6.28451 2.53271 8.68959C2.53271 12.5556 5.66672 15.6896 9.53271 15.6896C11.9378 15.6896 14.0627 14.4764 15.3238 12.6239C10.2144 12.0654 6.15692 8.00785 5.59839 2.89852ZM16.5327 10.6896C17.3988 10.6896 18.1445 11.4529 17.8018 12.2482C16.4225 15.4489 13.2393 17.6896 9.53271 17.6896C4.56215 17.6896 0.532715 13.6601 0.532715 8.68959C0.532715 4.98301 2.77339 1.79978 5.97411 0.420504C6.76946 0.0777708 7.53271 0.823551 7.53271 1.6896C7.53271 6.66016 11.5622 10.6896 16.5327 10.6896Z" fill="${color}"/>
</svg>
`;

const DarkIcon: React.FC<IcontType> = ({ color = 'white', width = 18, height = 18 }) => {
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

export default DarkIcon;


