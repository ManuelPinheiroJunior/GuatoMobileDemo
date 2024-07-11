import React from 'react';
import { SvgXml } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';
import IcontType from './IcontType';


const getSvgContent = (color: string) => `
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.28271 13.873C2.28271 13.3208 2.73043 12.873 3.28271 12.873H21.2827C21.835 12.873 22.2827 13.3208 22.2827 13.873V19.873C22.2827 21.5299 20.9396 22.873 19.2827 22.873H5.28271C3.62586 22.873 2.28271 21.5299 2.28271 19.873V13.873Z" fill="${color}"/>
<path d="M7.28271 2.87305C7.835 2.87305 8.28271 3.32076 8.28271 3.87305V4.87305H16.2827V3.87305C16.2827 3.32076 16.7304 2.87305 17.2827 2.87305C17.835 2.87305 18.2827 3.32076 18.2827 3.87305V4.87305H19.2827C20.9396 4.87305 22.2827 6.21619 22.2827 7.87305V9.87305C22.2827 10.4253 21.835 10.873 21.2827 10.873H3.28272C2.73043 10.873 2.28271 10.4253 2.28271 9.87305V7.87305C2.28271 6.21619 3.62586 4.87305 5.28272 4.87305H6.28271V3.87305C6.28271 3.32076 6.73043 2.87305 7.28271 2.87305Z" fill="${color}"/>
</svg>
`;

const CalendarIcon: React.FC<IcontType> = ({ color = '#6759FF', width = 24, height = 24 }) => {
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

export default CalendarIcon;


