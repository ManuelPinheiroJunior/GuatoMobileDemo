import React from 'react';
import { SvgXml } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';
import IcontType from './IcontType';


const getSvgContent = (color: string) => `
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.28271 17.469C2.28272 17.0881 2.43742 16.7236 2.71135 16.459L3.74031 15.4652C4.132 15.0869 4.35249 14.5652 4.35085 14.0207L4.34139 10.8676C4.32815 6.45624 7.9006 2.87305 12.312 2.87305C16.7141 2.87305 20.2827 6.44164 20.2827 10.8437L20.2827 14.0446C20.2827 14.5751 20.4934 15.0838 20.8685 15.4588L21.8685 16.4588C22.1337 16.724 22.2827 17.0838 22.2827 17.4588C22.2827 18.2399 21.6495 18.873 20.8685 18.873H16.2827C16.2827 21.0822 14.4919 22.873 12.2827 22.873C10.0736 22.873 8.28271 21.0822 8.28271 18.873H3.68679C2.91134 18.873 2.28271 18.2444 2.28271 17.469ZM10.2827 18.873C10.2827 19.9776 11.1781 20.873 12.2827 20.873C13.3873 20.873 14.2827 19.9776 14.2827 18.873H10.2827ZM18.2827 14.0446C18.2827 15.1055 18.7041 16.1229 19.4543 16.873L5.16122 16.873C5.92493 16.119 6.35407 15.0891 6.35084 14.0147L6.34138 10.8616C6.33146 7.55715 9.00751 4.87305 12.312 4.87305C15.6095 4.87305 18.2827 7.54621 18.2827 10.8437L18.2827 14.0446Z" fill="${color}"/>
</svg>
`;

const Notifications: React.FC<IcontType> = ({ color = '#D1D3D4', width = 24, height = 24 }) => {
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

export default Notifications;

