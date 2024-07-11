import React from 'react';
import { SvgXml } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';
import IcontType from './IcontType';


const getSvgContent = (color: string) => `
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2827 7.04375V5.87305C20.2827 4.21619 18.9396 2.87305 17.2827 2.87305H5.28271C3.62586 2.87305 2.28271 4.21619 2.28271 5.87305V19.873C2.28271 21.5299 3.62586 22.873 5.28271 22.873H19.2827C20.9396 22.873 22.2827 21.5299 22.2827 19.873V9.87305C22.2827 8.56683 21.4479 7.45559 20.2827 7.04375ZM4.28271 5.87305C4.28271 5.32076 4.73043 4.87305 5.28271 4.87305H17.2827C17.835 4.87305 18.2827 5.32076 18.2827 5.87305V6.87305H5.28271C4.73043 6.87305 4.28271 6.42533 4.28271 5.87305ZM4.28271 8.70234C4.59549 8.81289 4.93208 8.87305 5.28271 8.87305H19.2827C19.835 8.87305 20.2827 9.32076 20.2827 9.87305V11.873H17.2827C15.6259 11.873 14.2827 13.2162 14.2827 14.873C14.2827 16.5299 15.6259 17.873 17.2827 17.873H20.2827V19.873C20.2827 20.4253 19.835 20.873 19.2827 20.873H5.28271C4.73043 20.873 4.28271 20.4253 4.28271 19.873V8.70234ZM17.2827 13.873H20.2827V15.873H17.2827C16.7304 15.873 16.2827 15.4253 16.2827 14.873C16.2827 14.3208 16.7304 13.873 17.2827 13.873Z" fill="${color}"/>
</svg>
`;

const PaymentMethodsIcon: React.FC<IcontType> = ({ color = '#D1D3D4', width = 18, height = 18 }) => {
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

export default PaymentMethodsIcon;


